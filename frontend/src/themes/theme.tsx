import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];


const primary = '#1d1d1d';
const secundary = '#94ff83';

const theme = {
    fontSizes,
    colors: {
        primary,
        secundary,
    },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

}