import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  }
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  collapseIcon: CollapseIcon,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ListItem
      className={classes.item}
      activeClassName={classes.active}
      disableGutters
      {...rest}
    >
      {
        href == undefined
          ? (
            <Button
              activeClassName={clsx(classes.active, className)}
              className={clsx(classes.button, className)}
            >
              {Icon && (
              <Icon
                className={classes.icon}
                size="20"
              />
              )}
              <span className={classes.title}>
                {title}
              </span>
              {CollapseIcon && (
              <CollapseIcon
                className={classes.icon}
                size="20"
              />
              )}
            </Button>
          )
          : (
            <Button
              activeClassName={clsx(classes.active, className)}
              className={clsx(classes.button, className)}
              component={RouterLink}
              to={href}
            >
              {Icon && (
              <Icon
                className={classes.icon}
                size="20"
              />
              )}
              <span className={classes.title}>
                {title}
              </span>
              {CollapseIcon && (
              <CollapseIcon
                className={classes.icon}
                size="20"
              />
              )}
            </Button>
          )

      }

    </ListItem>
  );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
  hasChild: PropTypes.bool,
};

export default NavItem;
