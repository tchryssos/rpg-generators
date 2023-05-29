/* eslint-disable react/jsx-props-no-spreading */
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  TypographyProps,
} from '@mui/material';
import { ElementType } from 'react';

interface AccordionProps {
  children: React.ReactNode | React.ReactNode[];
  label: string;
  labelProps?: {
    variant?: TypographyProps['variant'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component?: ElementType<any>;
  };
  className?: string;
}

export function Accordion({
  children,
  label,
  labelProps,
  className,
}: AccordionProps) {
  return (
    <MuiAccordion className={className}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography {...labelProps}>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
}
