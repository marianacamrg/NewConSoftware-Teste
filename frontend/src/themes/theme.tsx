import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 18, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyLarge = fontSizes[1];
fontSizes.bodyExtraLarge = fontSizes[2];
fontSizes.displayExtraLarge = fontSizes[3];


const primary = '#1d1d1d';
const secondary = '#94ff83';

const theme = {
    fontSizes,
    fonts: {
      primary: 'Raleway',
      secondary: 'Roboto',
    },
    colors: {
      primary,
      secondary,
    },
  };
  
  export type ThemeType = typeof theme;
  
  export const Theme: React.FC = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };