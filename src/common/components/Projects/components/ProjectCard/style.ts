import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: '#2D2D2D',
    width: '25rem',
    height: '30rem',
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
  },
}));
