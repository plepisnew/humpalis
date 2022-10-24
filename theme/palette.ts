import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        page: {
            backgroundColor: string;
        };
        header: {
            backgroundColor: string;
        };
    }
    interface PaletteOptions {
        page: {
            backgroundColor: string;
        };
        header: {
            backgroundColor: string;
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
    header: {
        backgroundColor: 'rgb(33, 33, 33)'
    },
    page: {
        backgroundColor: 'rgb(224, 224, 224)'
    }
};

export default palette;
