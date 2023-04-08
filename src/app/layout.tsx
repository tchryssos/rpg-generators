'use client';

import { Head } from '~/components/meta/Head';

import { RootProviders } from './RootProviders';

interface RootProps {
  children: React.ReactNode;
}

function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <Head />
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}

export default RootLayout;
