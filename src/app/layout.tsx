/** @jsxImportSource react */

import { Metadata } from 'next';

import { RootProviders } from './components/RootProviders';

interface RootProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: 'rpg generators',
    template: '%s | rpg generators',
  },
  description: 'A set of quirky generators for your TTRPG needs.',
};

function RootLayout({ children }: RootProps) {
  return (
    <html lang="en">
      <body>
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}

export default RootLayout;
