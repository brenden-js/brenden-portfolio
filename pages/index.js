import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import ProjectBlock from '../src/ProjectBlock';
import { Grid } from '@material-ui/core';
import theme from '../src/theme';

const projects = [
  {
    githubLink: 'https://github.com/brenden-js/scootero',
    projectLink: 'https://github.com/brenden-js/scootero',
    projectName: 'Scootero',
    projectDesc: 'API for riders of electric scooters/bikes/wheels to track their cost and emmissions savings vs. taking a car',
    stack: {
      frontEnd: [
        'N/A'
      ],
      backEnd: [
        'Flask REST (Python)',
        'Google Distance Matrix API',
        'PostgreSQL',
        'AWS EC2',
        'AWS Cognito',
        'AWS Amplify',
      ]
    }
  },
  {
    githubLink: 'https://github.com/brenden-js/agent-plex',
    projectLink: 'https://www.homeplex.app/',
    projectName: 'Homeplex',
    projectDesc: 'App for agents to shop and schedule marketing services for their real estate listings',
    stack: {
      frontEnd: [
        'Material-UI',
        'React',
        'Redux',
        'Formik',
        'FullCalendar',
        'Google Maps API',
        'React-PDF'
      ],
      backEnd: [
        'AWS AppSync',
        'AWS DynamoDB',
        'AWS Lambda',
        'AWS Cognito',
        'AWS Amplify',
        'AWS S3',
      ]
    }
  },
  {
    githubLink: 'https://www.github.com/brenden-js',
    projectLink: 'https://brenden-portfolio.vercel.app/',
    projectName: 'Portfolio site',
    projectDesc: 'A simple portfolio site with a project directory',
    stack: {
      frontEnd: [
        'Material-UI',
        'Next.js'
      ],
      backEnd: [
        'Vercel',
      ]
    }
  },

]

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1">
          Brenden Padilla
        </Typography>
        <Typography variant="h6" component="h2">
          AWS Certified Solutions Architect Associate
        </Typography>
        <Typography>
          Full-stack Developer | Developer DAO Member
        </Typography>
        {projects.map((project) => {
          return (
            <Box
              mt={2}
              mb={2}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: '16px'
              }}
            >
              <Grid
                container
                spacing={3}
              >
                <ProjectBlock
                  projectName={project.projectName}
                  projectDesc={project.projectDesc}
                  githubLink={project.githubLink}
                  projectLink={project.projectLink}
                  stack={project.stack}
                />
              </Grid>
            </Box>
          )
        })}
        <Copyright />
      </Box>
      <Box>

      </Box>
    </Container>
  );
}
