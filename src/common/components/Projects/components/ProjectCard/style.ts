import { createStyles } from '@mantine/core';
import colors from '../../../../styles/colors';

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: '#2D2D2D',
    width: '25rem',
    height: '30rem',
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      width: '20rem',
      height: '24rem',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      width: '18rem',
      height: '24rem',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      width: '14.8rem',
      height: '24rem',
    },
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
    alignItems: 'center',
    padding: '1rem',
    transition: 'all 1s',
    ':hover': {
      img: {
        transform: 'scale(1.1)',
      },
      button: {
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
          display: 'block',
        },
      },
    },
  },
  button: {
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      display: 'block',
    },
    display: 'none',
    span: {
      display: 'flex',
      gap: '.7rem'
    },

    background: 'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
    color: colors.background.main,
    border: 'none',
  },
}));
