import React from 'react';
import { AppBar } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';

const Header: React.FC = () => {
    const theme: Theme = useTheme();
    const { header } = theme.palette;
    const { backgroundColor } = header;
    return (
        <AppBar
            sx={{
                backgroundColor
            }}
            position="sticky"
        ></AppBar>
    );
};

export default Header;
