import { Box, Button, Grid, Title } from '@mantine/core';
import profile from '../../../assets/profile.svg';
import { useStyles } from './style';
import cv from '../../../assets/cv.pdf'

export default function Home() {
  const { classes } = useStyles();

  return (
    <Box className={classes.component}>
            <Title className={classes.text1}>
                H E L L O  W O R L D 👋
            </Title>
            <img src={profile} alt="Guilherme" className={classes.img} />
            <Title className={classes.text2}>
                I AM <b className={classes.guilherme}>GUILHERME</b>,
                <br />
                <b className={classes.guilherme}>FULL STACK</b> DEVELOPER
            </Title>
            <Title className={classes.text3}>
              Front-end developer with experience in React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI, Mantine, React Query and consumption of REST and GraphQL APIs.
              <br />
              <br />
              Passionate about developing reusable components. He also has experience in projects managed by Agile Methodologies, mainly Scrum.
              <br />
              <br />
              Last semester in Computer Science graduation.
            </Title>
            <Button 
                variant='outline' 
                type='button' 
                className={classes.button} 
                color="portfolioBlue.0" 
                radius='lg'
                onClick={() => window.open(cv, '_blank')}
                >
                Download CV
            </Button>
    </Box>
  );
}
