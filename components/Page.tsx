import React from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import { Box } from '@mui/material';

type Props = {
    children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
    const theme: Theme = useTheme();
    const { page } = theme.palette;
    const { backgroundColor } = page;
    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor,
                padding: '2rem',
                height: '2000px'
            }}
        >
            {children}
        </Box>
    );
};

export default Page;
