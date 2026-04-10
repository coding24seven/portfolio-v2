import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from '@/app/App';

describe('App', () => {
  const renderApp = (path = '/') =>
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('matches snapshot for the default route render', () => {
    const { container } = renderApp();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot for /experience route render', () => {
    const { container } = renderApp('/experience');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot for /tech route render', () => {
    const { container } = renderApp('/tech');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot for /about route render', () => {
    const { container } = renderApp('/about');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('matches snapshot for /contact route render', () => {
    const { container } = renderApp('/contact');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should add event listeners to media queries on mount', () => {
    const addSpy = vi.spyOn(MediaQueryList.prototype, 'addEventListener');

    renderApp();

    expect(addSpy).toHaveBeenCalledTimes(2);
  });

  it('should cleanup event listeners on unmount', () => {
    const removeSpy = vi.spyOn(MediaQueryList.prototype, 'removeEventListener');

    const { unmount } = renderApp();

    unmount();

    expect(removeSpy).toHaveBeenCalledTimes(2);
  });
});
