import colors from '../../styles/colors';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridGap: '1.3rem',
    gridTemplateColumns: 'repeat(auto-fit, 25rem)',
    justifyContent: 'center',
    justifyItems: 'center',
  },
  title: {
    color: colors.text.main,
    fontSize: '2rem',
    fontWeight: 800,
  },
  content: {
    textAlign: 'center',
  },
  component: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.3rem',
    marginBottom: '3.75rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      alignItems: 'center',
      padding: '0 2.31rem',
    },
    padding: '0 4.31rem',
  },
  titleExperiences: {
    color: colors.text.main,
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      background: 'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    },
    fontSize: '1.2rem',
    fontWeight: 800,
    cursor: 'pointer',
    ':hover': {
      background: 'linear-gradient(45deg, rgb(78, 178, 240) 0%, rgb(38, 104, 223) 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    },
  },
  timeline: {
    '.mantine-Timeline-itemBullet': {
      width: '2rem',
      height: '2rem',
    },
    '.mantine-Timeline-item': {
      ':before': {
        borderLeft: 'none',
        backgroundColor: '#373A40',
        width: '.5rem',
        margin: '0 .3rem',
      },
    },
  },
}));
