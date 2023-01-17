import { MantineThemeOverride } from '@mantine/core';
import colors from '../colors';

const GlobalTheme: MantineThemeOverride = {
  colorScheme: 'dark',
  colors: {
    portfolioBlue: [
      colors.primary.main,
      colors.primary.light,
      colors.primary.dark,
    ],
  },
  primaryColor: 'portfolioBlue',
  headings: {
    fontFamily: 'Poppins',
  },
};

export default GlobalTheme;
