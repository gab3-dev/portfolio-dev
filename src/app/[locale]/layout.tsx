import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { berkleyFont } from '@/fonts';
import MainAppBar from '@/components/core/main-appbar';
import LocaleToggle from '@/components/core/locale-toggle';
import { routing } from '@/i18n/routing';
import '../globals.css';
import '../../components/styles/main.scss';

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'pt' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main
            className={`${berkleyFont.className} flex flex-col gap-[32px] row-start-2 sm:items-start`}
          >
            <div className="pt-[10px] w-[90vw] mx-auto">
              <MainAppBar className={berkleyFont.className} />
            </div>
            {children}
          </main>
          <footer className="flex flex-wrap row-start-3 justify-center items-center gap-[24px]" />
          <LocaleToggle />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
