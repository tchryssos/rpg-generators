import { styled } from '@mui/material';
import NextLink from 'next/link';

interface LinkProps {
  href: string;
  isInternal?: boolean;
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}

interface StyledProps extends Pick<LinkProps, 'underline'> {}

const StyledLink = styled('a')<StyledProps>`
  display: inline-block;
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  color: ${({ theme }) => theme.palette.text.primary};
  :hover {
    filter: brightness(0.8);
  }
`;

export function Link({
  href,
  isInternal = true,
  children,
  className,
  underline,
}: LinkProps) {
  return (
    <NextLink href={href} legacyBehavior passHref>
      <StyledLink
        className={className}
        rel="noopener noreferrer"
        target={isInternal ? '_self' : '_blank'}
        underline={underline}
      >
        {children}
      </StyledLink>
    </NextLink>
  );
}
