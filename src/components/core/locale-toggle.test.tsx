import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocaleToggle from './locale-toggle';
import { NextIntlClientProvider } from 'next-intl';
import { messages } from '@/test/intl-wrapper';

const mockReplace = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockReplace }),
  usePathname: () => '/pt/projects',
}));

function renderWithLocale(locale: string) {
  return render(
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleToggle />
    </NextIntlClientProvider>
  );
}

describe('LocaleToggle', () => {
  beforeEach(() => {
    mockReplace.mockClear();
  });

  it('shows Portuguese as selected when locale is "pt"', () => {
    renderWithLocale('pt');
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByText('PT')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('shows English as selected when locale is "en"', () => {
    renderWithLocale('en');
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });

  it('uses client-side navigation to swap the locale', async () => {
    renderWithLocale('pt');
    await userEvent.click(screen.getByRole('switch'));

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
    expect(mockReplace).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith('/en/projects', { scroll: false });
      expect(mockReplace).toHaveBeenCalledTimes(1);
    });
  });
});
