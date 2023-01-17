import colors from '../../styles/colors';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
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
    marginBottom: '1.3rem',
    [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
      alignItems: 'center',
      padding: '0 2.31rem',
    },
    padding: '0 4.31rem',
  },
}));
