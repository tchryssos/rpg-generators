/**
 * See https://github.com/emotion-js/emotion/issues/2928#issuecomment-1293885043
 * Next 13 / app folder don't have good support for emotion
 * and ESPECIALLY don't support using emotion as your jsx engine.
 *
 * Because 99% of our components are going to use emotion (MUI uses it internally)
 * we're going to stick with our compiler: 'emotion' in next.config and
 * "jsxImportSource": "@emotion/react" in our tsconfig.
 *
 * However, that means that emotion is used EVERY time there's jsx, which means
 * that _every_ component would be a client component since emotion relies on stateful
 * hooks internally.
 *
 * In order to allow us to get SOME benefits from server components, we can override the
 * jsxImportSource on a file-by-file basis. This is what we're doing here.
 *
 * This is particularly important here because it is the root layout and we want to use
 * the new metadata export which only works with server components.
 */
/** @jsxImportSource react */

import { Metadata } from 'next';

import { RootProviders } from './RootProviders';

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
