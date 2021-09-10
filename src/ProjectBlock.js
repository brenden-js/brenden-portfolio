import { Box, Button, Chip, Divider, Grid, Typography } from '@material-ui/core';
import ExternalLinkIcon from './ExternalLinkIcon';
import React from 'react';

export default function ProjectBlock(props) {
  const { projectName, projectDesc, githubLink, stack, projectLink } = props;
  const handleRepoClick = () => {
    window.open(githubLink);
  };
  const handleLiveClick = () => {
    window.open(projectLink);
  }
  return (
    <>
      <Grid
        item
        xs={12}
        md={8}
      >
        <Box
          sx={{
            p: 3
          }}
        >
          <Box
            sx={{
              mb: 2
            }}
          >
            <Typography
              variant="overline"
            >
              Project
            </Typography>
            <Typography
              variant="h5"
              color="textPrimary"
            >
              {projectName}
            </Typography>
            <Typography
              variant='body2'
            >
              {projectDesc}
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              mb: 2,
              mt: 2
            }}
          >
            <Typography
              variant="overline"
            >
              Front End
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {stack.frontEnd.map((item) => {
                return (
                  <Box
                    sx={{
                      p: 1
                    }}
                  >
                    <Chip label={item} />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              mb: 2,
              mt: 2
            }}
          >
            <Typography
              variant="overline"
            >
              Back End
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
              {stack.backEnd.map((item) => {
                return (
                  <Box
                    sx={{
                      p: 1
                    }}
                  >
                    <Chip label={item} />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
      >
        <Box
          sx={{
            p: 3
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              mt: 2,
              mb: 2
            }}
          >
            <Button
              color="primary"
              endIcon={<ExternalLinkIcon fontSize="small" />}
              variant="outlined"
              size="medium"
              onClick={handleLiveClick}
            >
              View Live
            </Button>
          </Box>
          <Divider />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              mt: 2,
              mb: 2
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              size="medium"
              endIcon={<ExternalLinkIcon fontSize="small" />}
              onClick={handleRepoClick}
            >
              View repo
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  )
    ;
}
