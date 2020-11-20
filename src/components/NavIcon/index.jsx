import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  withStyles,
} from '@material-ui/core';

export const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const NavIcon = ({ icon, menus, notification }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        {notification ? (
          <Badge badgeContent={notification.length} color="secondary">
            {icon}
          </Badge>
        ) : (
          <Badge color="secondary">{icon}</Badge>
        )}
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menus.map((menu, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose();
              menu.action();
            }}
          >
            <ListItemIcon>{menu.icon}</ListItemIcon>
            <ListItemText primary={menu.title} />
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default NavIcon;
