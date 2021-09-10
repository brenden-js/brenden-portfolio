import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Brenden Padilla | '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        AWS Certified Solutions Architect Associate | Full-stack Developer
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
