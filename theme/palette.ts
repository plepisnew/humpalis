import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        top: {
            main: string;
            contrastText: string;
        };
        bottom: {
            main: string;
            contrastText: string;
        };
    }
    interface PaletteOptions {
        top: {
            main: string;
            contrastText: string;
        };
        bottom: {
            main: string;
            contrastText: string;
        };
    }
}

const palette: PaletteOptions = {
    primary: {
        light: 'rgb(30, 136, 229)',
        main: 'rgb(25, 118, 210)',
        dark: 'rgb(21, 101, 192)',
        contrastText: 'rgb(255, 255, 255)'
    },
    secondary: {
        light: 'rgb(233, 30, 99)',
        main: 'rgb(216, 27, 96)',
        dark: 'rgb(194, 24, 91)',
        contrastText: 'rgb(255, 255, 255)'
    },
    top: {
        main: 'rgb(33, 33, 33)',
        contrastText: 'rgb(255, 255, 255)'
    },
    bottom: {
        main: 'rgb(224, 224, 224)',
        contrastText: 'rgb(0, 0, 0)'
    }
};

export default palette;
