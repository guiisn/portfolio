import { Box, Text, Timeline, Title } from '@mantine/core';
import experiences, { Experience } from '../../api/experiences';
import { useStyles } from './style';

export default function Experiences() {
  const { classes } = useStyles();

  return (
    <Box className={classes.component} >
        <Box className={classes.content}>
            <Title className={classes.title}>
                Experiences
            </Title>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Timeline className={classes.timeline} >
            {experiences.map((experience: Experience, index: number) => (
                <Timeline.Item bullet={index + 1} key={index}>
                <Text className={classes.titleExperiences} onClick={() => window.open(experience.link, '_blank')}>{experience.name}</Text>
                <Text>{experience.office}</Text>
                <Text>{experience.period}</Text>
            </Timeline.Item>
            ))}
        </Timeline>
        </Box>
    </Box>
  );
}

