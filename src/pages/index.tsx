import { Box, Typography } from '@mui/material';

import { Link } from '~/components/Link';
import { PEOPLE_ROUTE, PLACES_ROUTE } from '~/constants/routing';

function Home() {
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Link href={PEOPLE_ROUTE} isInternal underline>
        <Typography>Generate Person</Typography>
      </Link>
      <Link href={PLACES_ROUTE} isInternal underline>
        <Typography>Generate Place</Typography>
      </Link>
    </Box>
  );
}

export default Home;
