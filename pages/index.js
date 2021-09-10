import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import ProjectBlock from '../src/ProjectBlock';
import { Grid } from '@material-ui/core';
import theme from '../src/theme';

const projects = [
  {
    githubLink: 'https://www.github.com/',
    projectLink: 'https://www.scootero.app',
    projectName: 'Scootero',
    projectDesc: 'App for riders of electric scooters/bikes/wheels to track their cost and emmissions savings vs. taking a car',
    stack: {
      frontEnd: [
        'Material-UI',
        'Next.js',
        'Google Maps API'
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
    githubLink: 'https://www.github.com/',
    projectLink: 'https://www.agent.homeplex.app',
    projectName: 'Agent Homeplex',
    projectDesc: 'App for agents to shop and schedule marketing services for their real estate listings',
    stack: {
      frontEnd: [
        'Material-UI',
        'React',
        'Redux',
        'Formik',
        'FullCalendar',
        'Google Maps API'
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
    githubLink: 'https://www.github.com/',
    projectLink: 'https://www.admin.homeplex.app',
    projectName: 'Admin Homeplex',
    projectDesc: 'Admin panel for viewing and managing orders for Homeplex.',
    stack: {
      frontEnd: [
        'Material-UI',
        'React',
        'Redux',
        'Formik',
        'FullCalendar',
        'Google Maps API'
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
          Full-stack Developer
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
