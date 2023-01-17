import colors from '../../styles/colors';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  guilherme: {
    color: colors.primary.main,
  },
  component: {
    margin: 0,
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '0 2rem',
  },
  img: {
    borderRadius: '50%',
    transition: 'all .4s',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
  text1: { color: colors.text.main, fontWeight: 400, fontSize: '.9rem' },
  text2: {
    color: colors.text.main,
    fontWeight: 700,
    fontSize: '2.5rem',
    textAlign: 'center',
  },
  text3: {
    color: colors.text.main,
    fontWeight: 500,
    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
      width: '40rem',
    },
    fontSize: '1.2rem',
    textAlign: 'center',
  },
  button: {
    width: '22.875rem',
  },
}));
