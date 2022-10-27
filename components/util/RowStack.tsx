import React from 'react';
import { Stack, StackProps } from '@mui/material';

interface Props extends StackProps {
    children: React.ReactNode;
    centerY?: boolean;
}

const RowStack: React.FC<Props> = (props) => {
    const { centerY = true, children } = props;
    return (
        <Stack
            direction="row"
            {...props}
            sx={{
                display: centerY ? 'flex' : null,
                alignItems: centerY ? 'center' : null,
                ...props.sx
            }}
        >
            {children}
        </Stack>
    );
};

export default RowStack;
