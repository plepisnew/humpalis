import { ThemeOptions } from '@mui/material';
import Header from '@/components/Header';
const components: ThemeOptions['components'] = {
    Header: {
        defaultProps: {
            height: ''
        },
        styleOverrrides: {}
    }
};

export default components;
