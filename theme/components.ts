import { ThemeOptions } from '@mui/material';
const components: ThemeOptions['components'] = {
    MuiAppBar: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.top.main,
                color: theme.palette.top.contrastText,
                height: '70px',
                fontFamily: 'Nunito'
            })
        }
    },
    MuiBottomNavigation: {
        styleOverrides: {
            root: ({ theme }) => ({
                backgroundColor: theme.palette.top.main,
                color: theme.palette.top.contrastText
            })
        }
    },
    MuiBottomNavigationAction: {
        styleOverrides: {
            root: {
                color: 'inherit'
            }
        }
    }
};

export default components;
