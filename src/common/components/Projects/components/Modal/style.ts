import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  modal: {
    '.mantine-Modal-modal': {
      width: '50rem',
      // height: '25rem',
      display: 'flex',
      flexDirection: 'column',
      padding: '4rem 1rem',
      borderRadius: '30px',
    },
  },
  container: {
    width: '100%',
    // height: 'calc(25rem - 2.5rem)',
  },
}));
