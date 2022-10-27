import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Footer: React.FC = () => {
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Report bug" icon={<BugReportIcon />} />
            <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} />
        </BottomNavigation>
    );
};

export default Footer;
