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
    marginTop: '3.75rem',
    marginBottom: '3.75rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      alignItems: 'center',
      padding: '0 2.31rem',
    },
    padding: '0 4.31rem',
  },
}));
