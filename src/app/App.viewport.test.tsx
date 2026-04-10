import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { page } from 'vitest/browser';
import App from '@/app/App';

const renderAppAtViewport = async (width: number, height = 900) => {
  await page.viewport(width, height);

  return render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  );
};

const getThirdButtonWrapperRadius = () => {
  const nav = screen.getByRole('navigation');
  const wrappers = Array.from(nav.children) as HTMLElement[];
  const thirdWrapper = wrappers[2];

  return parseFloat(getComputedStyle(thirdWrapper).borderBottomRightRadius);
};

describe('App viewport theme sizing', () => {
  it('uses large theme sizing on wide viewport', async () => {
    await renderAppAtViewport(1300);

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('uses medium theme sizing on medium viewport', async () => {
    await renderAppAtViewport(500);

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('uses small theme sizing on narrow viewport', async () => {
    await renderAppAtViewport(220);

    expect(
      screen.queryByRole('link', { name: 'Home' }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'home' })).toBeInTheDocument();
  });

  it('applies distinct button radius measurements for large, medium, and small themes', async () => {
    const first = await renderAppAtViewport(1300);
    const largeRadius = getThirdButtonWrapperRadius();
    first.unmount();

    const second = await renderAppAtViewport(500);
    const mediumRadius = getThirdButtonWrapperRadius();
    second.unmount();

    await renderAppAtViewport(220);
    const smallRadius = getThirdButtonWrapperRadius();

    expect(largeRadius).toBeGreaterThan(mediumRadius);
    expect(mediumRadius).toBeGreaterThan(smallRadius);
  });
});
