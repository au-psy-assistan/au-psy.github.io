import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://au-psy-assistan.github.io/au-psy.github.io/'),
  title: 'AU — ассистент психолога',
  description: 'Приложение для расшифровки консультаций, конспекта, разметки когнитивных искажений и PDF-отчёта.',
  icons: { icon: './favicon.png' },
  openGraph: {
    title: 'AU — ассистент психолога',
    description: 'Расшифровка, конспект и разметка когнитивных искажений в приложении AU.',
    type: 'website',
    locale: 'ru_RU',
    url: './',
    images: [{ url: './og.png', width: 1200, height: 630, alt: 'AU — ассистент психолога' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AU — ассистент психолога',
    description: 'Расшифровка, конспект и разметка когнитивных искажений в приложении AU.',
    images: ['./og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
