import React from 'react';
import {
    AppBar,
    Box,
    Badge,
    Avatar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from '@/store/hooks';
import { selectLanguage, setLanguage } from '@/store/languageSlice';
import translator from '@/localization/index';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Language } from '@/localization/types';
import FlexBox from './util/FlexBox';
import RowStack from './util/RowStack';

const Header: React.FC = () => {
    const language = useSelector(selectLanguage);
    const locale = translator(language);
    const dispatch = useDispatch();

    const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
    const handleLanguageAnchorClick = (e: React.MouseEvent<HTMLElement>) => {
        setLanguageAnchorEl(e.currentTarget);
    };
    const handleLanguageClose = () => {
        setLanguageAnchorEl(null);
    };
    const languageOpen = () => Boolean(languageAnchorEl);

    const languages = [translator(Language.LV), translator(Language.EN), translator(Language.RU)];

    return (
        <AppBar position="sticky">
            <FlexBox>
                <RowStack
                    spacing={5}
                    sx={{
                        textTransform: 'uppercase',
                        flexGrow: 1
                    }}
                >
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">home</Typography>
                    <Typography variant="h6">store</Typography>
                </RowStack>
                <RowStack spacing={3} mx={3}>
                    <Button disableRipple onClick={handleLanguageAnchorClick} color="inherit">
                        {locale.language}
                        <ExpandMoreIcon
                            sx={{
                                transform: `scaleY(${languageOpen() ? -1 : 1})`,
                                transition: 'transform 200ms'
                            }}
                        />
                    </Button>
                    <Menu
                        anchorEl={languageAnchorEl}
                        open={languageOpen()}
                        onClose={handleLanguageClose}
                    >
                        {languages.map((lang) => {
                            const { name, abbrev, flagPath } = lang.meta;
                            return (
                                <MenuItem
                                    key={name}
                                    selected={language === abbrev}
                                    onClick={() => {
                                        handleLanguageClose();
                                        dispatch(setLanguage(abbrev as Language));
                                    }}
                                >
                                    <Box component="img" src={flagPath} height={16} />
                                    {name}
                                </MenuItem>
                            );
                        })}
                    </Menu>
                    <Typography variant="body1">ansishihi</Typography>
                    <Badge badgeContent={4} color="secondary">
                        <Avatar src="/images/aleister.png" />
                    </Badge>
                </RowStack>
            </FlexBox>
        </AppBar>
    );
};

export default Header;
