import {
  Box,
  Button,
  Grid,
  Modal as MantineModal,
  ModalProps,
  SimpleGrid,
  Space,
  Title,
} from '@mantine/core';
import React from 'react';
import euContribuinte from '../../../../../assets/euContribuinte.png';

import { useStyles } from './style';

interface IModal extends ModalProps {
  name: string;
  description: string;
  link?: string;
  gitHub?: string;
  photo: string;
}

export default function Modal(props: IModal) {
  const { description, name, photo, link, gitHub } = props;
  const { classes } = useStyles();

  return (
    <MantineModal
      {...props}
      centered
      withCloseButton={false}
      className={classes.modal}
    >
      <Grid className={classes.container}>
        <Grid.Col
          xl={5}
          lg={5}
          md={5}
          sm={12}
          xs={12}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
          }}
        >
          <img src={photo} alt="" style={{ width: '100%' }} />
        </Grid.Col>
        <Grid.Col xl={7} lg={7} md={7} sm={12} xs={12}>
          <Title>{name}</Title>
          <Title
            sx={{
              fontSize: '1.2rem',
              fontWeight: 500,
            }}
          >
            {description}
          </Title>
          <Space h="md" />
          <SimpleGrid cols={2}>
            <Button
              variant="filled"
              color="portfolioBlue.0"
              radius="lg"
              onClick={() => window.open(link, '_blank')}
            >
              Project site
            </Button>
            <Button
              onClick={() => window.open(gitHub, '_blank')}
              disabled={gitHub === undefined ? true : false}
              variant="filled"
              color="portfolioBlue.0"
              radius="lg"
            >
              GitHub
            </Button>
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </MantineModal>
  );
}
