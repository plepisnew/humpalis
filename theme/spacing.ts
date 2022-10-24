import { ThemeOptions } from '@mui/material/styles';

const spacing: ThemeOptions['spacing'] = (factor: number) => `${0.25 * factor}rem`;

export default spacing;
