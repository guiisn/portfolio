import colors from './common/styles/colors';
import { createStyles } from '@mantine/core';

export const indexStyles = createStyles(() => ({
  body: {
    backgroundColor: colors.background.main,
    color: colors.text.main,
    height: '100%',
  },
}));
