import { Box, Typography } from '@mui/material';

interface CheckboxLabelProps {
  title: string;
  description?: string;
}

export const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
  title,
  description,
}) => (
  <Box display="flex" flexDirection="column">
    <Typography component="span">{title}</Typography>
    {description && (
      <Typography component="span" variant="caption">
        {description}
      </Typography>
    )}
  </Box>
);
