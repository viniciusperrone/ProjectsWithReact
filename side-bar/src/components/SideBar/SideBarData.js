import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia'


export const SiderBarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: './home'
    },
    {
        title: 'MailBox',
        icon: <MailIcon />,
        link: './home'
    },
    {
        title: 'Analytics',
        icon: <AssessmentIcon />,
        link: './home'
    },
    {
        title: 'Dashboad',
        icon: <DashboardIcon />,
        link: './home'
    },
    {
        title: 'Friends',
        icon: <GroupIcon />,
        link: './home'
    },
    {
        title: 'Images',
        icon: <PermMediaIcon />,
        link: './home'
    }

]