import { createTheme, Theme } from '@mui/material';
import palette from './palette';
import typography from './typography';
import spacing from './spacing';
import components from './components';

const theme: Theme = createTheme({
    palette,
    typography,
    spacing,
    components
});

export default theme;
