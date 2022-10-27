import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

type Props = {
    children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
    const theme: Theme = useTheme();
    const { bottom } = theme.palette;
    const { main } = bottom;
    return (
        <Box
            sx={{
                backgroundColor: main,
                padding: '2rem !important',
                height: '2000px'
            }}
        >
            {children}
        </Box>
    );
};

export default Page;
