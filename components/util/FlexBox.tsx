import React from 'react';
import { Box } from '@mui/material';

type Props = {
    children: React.ReactNode;
    heightAuto?: boolean;
};

const FlexBox: React.FC<Props> = ({ children, heightAuto }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: heightAuto ? 'auto' : '100%'
            }}
        >
            {children}
        </Box>
    );
};

export default FlexBox;
