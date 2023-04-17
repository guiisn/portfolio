import { Box, Button, Grid, Group, Stack, Title } from '@mantine/core';
import profile from '../../../assets/profile-picture.png';
import { useStyles } from './style';
import cv from '../../../assets/cv.pdf';
import { Icon } from '@iconify/react';
import './index.css';
import { useEffect, useState } from 'react';

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export default function Home() {
  const { classes } = useStyles();

  const [circles, setCircles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const size = getRandomNumber(1, 16);
    const interval = setInterval(() => {
      if (circles?.length > 100) {
        setCircles([]);
      }
      const newCircle = (
        <div
          key={circles.length}
          className="circle"
          style={{
            backgroundColor: '#272727',
            width: size,
            height: size,
            left: getRandomNumber(0, window.innerWidth - 50),
            top: getRandomNumber(0, window.innerHeight - 50),
          }}
        ></div>
      );
      setCircles((prevCircles) => [...prevCircles, newCircle]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.component} id="home">
      <Box className={classes.circlesContainer}>
        {circles.map((circle) => circle)}
      </Box>
      <Title className={classes.text1}>H E L L O W O R L D 👋</Title>
      <img src={profile} alt="Guilherme" className={classes.img} />
      <Title className={classes.text2}>
        I AM <b className={classes.guilherme}>GUILHERME</b>,
        <br />
        <b className={classes.guilherme}>FULL STACK</b> DEVELOPER
      </Title>
      <Title className={classes.text3}>
        Full stack developer with experience in React.js, Next.js, Redux,
        JavaScript, TypeScript, Styled Components, Material UI, Mantine, React
        Query and consumption of REST and GraphQL APIs.
        <br />
        <br />
        Passionate about developing reusable components. He also has experience
        in projects managed by Agile Methodologies, mainly Scrum.
        <br />
        <br />
        Last semester in Computer Science graduation.
      </Title>
      <Button
        variant="outline"
        type="button"
        className={classes.button}
        color="portfolioBlue.0"
        radius="lg"
        onClick={() => window.open(cv, '_blank')}
      >
        Download CV
        <Icon width={'1.5rem'} icon="material-symbols:download-rounded" />
      </Button>
      <div className="circulo" />
    </Box>
  );
}
