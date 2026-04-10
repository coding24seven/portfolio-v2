import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from '@/components/navbar/Navbar';
import { pageSliderContext } from '@/page-slider/page-slider-context';

type RenderOptions = {
  currentPageName?: string;
  themeSize?: string;
  pageSlideIsCompleted?: boolean;
};

const renderNavbar = ({
  currentPageName = 'home',
  themeSize = 'large',
  pageSlideIsCompleted = true,
}: RenderOptions = {}) =>
  render(
    <MemoryRouter>
      <pageSliderContext.Provider
        value={{
          pageSlideIsCompleted,
          setPageSlideIsCompleted: () => {},
        }}
      >
        <Navbar themeSize={themeSize} currentPageName={currentPageName} />
      </pageSliderContext.Provider>
    </MemoryRouter>,
  );

describe('Navbar', () => {
  it('renders all navigation links in the expected order', () => {
    renderNavbar();

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(5);
    expect(links.map((link) => link.textContent?.trim())).toEqual([
      'Home',
      'Exp',
      'Tech',
      'About',
      'Contact',
    ]);
  });

  it('renders links with the expected destinations', () => {
    renderNavbar();

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/',
    );
    expect(screen.getByRole('link', { name: 'Exp' })).toHaveAttribute(
      'href',
      '/experience',
    );
    expect(screen.getByRole('link', { name: 'Tech' })).toHaveAttribute(
      'href',
      '/tech',
    );
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/about',
    );
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/contact',
    );
  });

  it('marks only the current page button as selected', () => {
    renderNavbar({ currentPageName: 'tech' });

    const techWrapper = screen.getByRole('link', {
      name: 'Tech',
    }).parentElement;
    const homeWrapper = screen.getByRole('link', {
      name: 'Home',
    }).parentElement;

    expect(techWrapper).toHaveClass('button-selected');
    expect(homeWrapper).not.toHaveClass('button-selected');
  });

  it('keeps the navbar onscreen when page transition is completed', () => {
    renderNavbar({ pageSlideIsCompleted: true });

    const nav = screen.getByRole('navigation');

    expect(getComputedStyle(nav).left).toBe('0px');
  });

  it('updates navbar styles when page transition completion changes', () => {
    const { rerender } = renderNavbar({ pageSlideIsCompleted: true });

    const navWhenCompleted = screen.getByRole('navigation');
    const classWhenCompleted = navWhenCompleted.className;

    rerender(
      <MemoryRouter>
        <pageSliderContext.Provider
          value={{
            pageSlideIsCompleted: false,
            setPageSlideIsCompleted: () => {},
          }}
        >
          <Navbar themeSize="large" currentPageName="home" />
        </pageSliderContext.Provider>
      </MemoryRouter>,
    );

    const navWhenNotCompleted = screen.getByRole('navigation');

    expect(navWhenNotCompleted.className).not.toBe(classWhenCompleted);
  });
});
