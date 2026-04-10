import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router';
import NavbarButton from '@/components/navbar/NavbarButton';

const baseProps = {
  name: 'home',
  text: 'Home',
  iconName: 'home',
  currentPageName: 'home',
  to: '/home',
};

const renderButton = (props?: Partial<ComponentProps<typeof NavbarButton>>) =>
  render(
    <MemoryRouter>
      <NavbarButton {...baseProps} themeSize="large" {...props} />
    </MemoryRouter>,
  );

const LocationStateProbe = () => {
  const { state } = useLocation();
  return <pre data-testid="location-state">{JSON.stringify(state)}</pre>;
};

describe('NavbarButton', () => {
  it('renders text label for non-small theme size', () => {
    renderButton({ themeSize: 'large' });

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.queryByText('home')).not.toBeInTheDocument();
  });

  it('renders icon for small theme size', () => {
    renderButton({ themeSize: 'small' });

    const icon = screen.getByText('home');

    expect(icon).toHaveClass('material-icons');
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
  });

  it('applies selected class to the wrapper when selected is true', () => {
    renderButton({ selected: true });

    const link = screen.getByRole('link', { name: 'Home' });
    const wrapper = link.parentElement;

    expect(wrapper).toHaveClass('button-selected');
  });

  it('changes hover styling on mouse enter and leave', () => {
    renderButton({ selected: false });

    const link = screen.getByRole('link', { name: 'Home' });
    const wrapper = link.parentElement as HTMLElement;
    const classBeforeHover = wrapper.className;

    fireEvent.mouseEnter(wrapper);
    const classOnHover = wrapper.className;

    fireEvent.mouseLeave(wrapper);

    expect(classOnHover).not.toBe(classBeforeHover);
    expect(wrapper.className).toBe(classBeforeHover);
  });

  it('navigates with expected route state', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={
              <NavbarButton
                name="experience"
                text="Exp"
                iconName="work"
                currentPageName="home"
                themeSize="large"
                to="/experience"
              />
            }
          />
          <Route path="/experience" element={<LocationStateProbe />} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'Exp' }));

    expect(screen.getByTestId('location-state')).toHaveTextContent(
      JSON.stringify({
        linkName: 'experience',
        previousPageName: 'home',
      }),
    );
  });
});
