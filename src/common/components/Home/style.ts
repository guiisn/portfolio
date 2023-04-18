import colors from '../../styles/colors';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  guilherme: {
    background: 'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
    'WebkitBackgroundClip': 'text',
    'WebkitTextFillColor': 'transparent'
  },
  component: {
    margin: 0,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '0 2rem',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.1)'
  },
  img: {
    borderRadius: '50%',
    transition: 'all .4s',
    ':hover': {
      transform: 'scale(1.1)',
    },
    width: '20rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: '15rem',
    },
  },
  text1: {
    color: colors.text.main,
    fontWeight: 400, fontSize: '.9rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '.8rem',
    },
  },
  text2: {
    color: colors.text.main,
    fontWeight: 700,
    fontSize: '2.5rem',
    textAlign: 'center',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '2rem',
    },
  },
  text3: {
    color: colors.text.main,
    fontWeight: 500,
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      width: '40rem',
    },
    fontSize: '1.2rem',
    textAlign: 'justify',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      fontSize: '1.1rem',
    },
  },
  button: {
    width: '20rem',
    span: {
      display: 'flex',
      gap: '.7rem'
    },

    background: 'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
    color: colors.background.main,
    border: 'none',

    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-out',

    ":before": {
      content: "''",
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '150%',
      height: '150%',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      transition: 'transform 0.3s ease-out',
      zIndex: -1,
    },

    ':hover': {
      transform: 'translateY(4px)',
      backgroundColor: 'transparent',
    },

    ':hover::before': {
      transform: 'translate(-50%, -50%) rotate(45deg) scaleX(2) scaleY(0.5)'
    }
  },
  circlesContainer: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    zIndex: -1
  }
}));
