import { styled } from '@mui/material';

import { pxToRem } from '~/libs/util/styles';

import { Head } from './Head';

const Container = styled('div')`
  max-width: ${({ theme }) => pxToRem(theme.breakpoints.values.lg)};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(1)};
  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};
export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head title={title} />
      <Container>{children}</Container>
    </>
  );
}
