import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Brenden Padilla
        </Typography>
        <Link href="/about" color="secondary">
          AWS Certified Solutions Architect Associate
        </Link>
        <Typography>
           Full-stack Developer
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
      <Box>

      </Box>
    </Container>
  );
}
