import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles,
  Collapse
} from '@material-ui/core';

import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon, 
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
} from 'react-feather';

import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith'
};

// const items = [
//   {
//     href: '/app/dashboard',
//     icon: BarChartIcon,
//     title: 'Dashboard'
//   },
//   {
//     href: '/app/customers',
//     icon: UsersIcon,
//     title: 'Customers'
//   },
//   {
//     href: '/app/products',
//     icon: ShoppingBagIcon,
//     title: 'Products'
//   },
//   {
//     href: '/app/account',
//     icon: UserIcon,
//     title: 'Account'
//   },
//   {
//     href: '/app/settings',
//     icon: SettingsIcon,
//     title: 'Settings'
//   },
//   {
//     href: '/login',
//     icon: LockIcon,
//     title: 'Login'
//   },
//   {
//     href: '/register',
//     icon: UserPlusIcon,
//     title: 'Register'
//   },
//   {
//     href: '/404',
//     icon: AlertCircleIcon,
//     title: 'Error'
//   }
// ];

const useStyles = makeStyles((theme) => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  },
  nested: {
    paddingLeft: theme.spacing(4),
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  const [customersOpen, setCustomersOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);

  const handleCustomersClick = () => {
    setCustomersOpen(!customersOpen);
  };

  const handleDevelopersClick = () => {
    setDevelopersOpen(!developersOpen);
  };

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          <NavItem
            href="/app/dashboard"
            key="DashBoard"
            title="DashBoard"
            icon={BarChartIcon}
          />
          <NavItem
            key="Customers"
            title="Customers"
            icon={UserIcon}
            collapseIcon={customersOpen ? ChevronUpIcon : ChevronDownIcon}
            onClick={handleCustomersClick}
          />
          <Collapse
            in={customersOpen}
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              <NavItem
                className={classes.nested}
                href="/app/customers/list"
                key="CustomersList"
                title="Customers List"
              />
              <NavItem
                className={classes.nested}
                href="/app/customers/view"
                key="CustomersView"
                title="Customers View"
              />
              <NavItem
                className={classes.nested}
                href="/app/customers/edit"
                key="CustomersEdit"
                title="Customers Edit"
              />
            </List>
          </Collapse>
          <NavItem
            key="Developers"
            title="Developers"
            icon={ShoppingBagIcon}
            collapseIcon={developersOpen ? ChevronUpIcon : ChevronDownIcon}
            onClick={handleDevelopersClick}
          />
          <Collapse
            in={developersOpen}
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              <NavItem
                className={classes.nested}
                href="/app/developers/list"
                key="DevelopersList"
                title="Developers List"
              />
              <NavItem
                className={classes.nested}
                href="/app/developers/view"
                key="DevelopersView"
                title="Developers View"
              />
              <NavItem
                className={classes.nested}
                href="/app/developers/edit"
                key="DevelopersEdit"
                title="Developers Edit"
              />
            </List>
          </Collapse>
          <NavItem
            href="/app/account"
            key="Account"
            title="Account"
            icon={UserIcon}
          />
          <NavItem
            href="/app/settings"
            key="Settings"
            title="Settings"
            icon={SettingsIcon}
          />
        </List>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
