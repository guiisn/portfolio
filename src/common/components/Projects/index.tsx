import { Box, Title } from '@mantine/core';
import projects, { Project } from '../../api/projects';
import ProjectCard from './components/ProjectCard';
import { useStyles } from './style';

export default function Projects() {
  const { classes } = useStyles();

  return (
    <Box className={classes.component}>
      <Box className={classes.content}>
        <Title className={classes.title}>Projects</Title>
      </Box>
      <Box className={classes.grid}>
        {projects.map((project: Project, index: number) => (
          <ProjectCard
            photo={project.photo}
            key={index}
            status={project.status}
            name={project.name}
            description={project.description}
            link={project.link}
            gitHub={project.gitHub}
          />
        ))}
      </Box>
    </Box>
  );
}
