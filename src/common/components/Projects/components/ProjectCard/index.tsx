import { Badge, Box, Button, Paper, Title } from '@mantine/core';
import { useState } from 'react';
import { Project } from '../../../../api/projects';
import Modal from '../Modal';
import { useStyles } from './style';
import { Icon } from '@iconify/react';

export default function ProjectCard({
  photo,
  status,
  name,
  description,
  gitHub,
  link,
}: Project) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Paper shadow="xl" className={classes.card} radius="lg">
        <Box sx={{ width: '22rem' }}>
          <img src={photo} alt="" style={{ width: '100%' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            gap: '1rem',
          }}
        >
          <Badge
            sx={
              status === 'FINISHED'
                ? { backgroundColor: 'green', color: 'white' }
                : { backgroundColor: 'red', color: 'white' }
            }
          >
            {status}
          </Badge>
          <Title sx={{ fontWeight: 600, fontSize: '1.5rem' }}>{name}</Title>
          <Button
            onClick={() => setOpened(true)}
            variant="outline"
            color={'portfolioBlue.0'}
            radius="lg"
            fullWidth
            className={classes.button}
          >
            More infos{' '}
            <Icon width={'1.5rem'} icon="material-symbols:info-rounded" />
          </Button>
        </Box>
      </Paper>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        name={name}
        description={description}
        photo={photo}
        link={link}
        gitHub={gitHub}
      />
    </>
  );
}
