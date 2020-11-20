import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthUser } from 'services/auth';
import { useQuery } from 'react-query';
import { setUser } from 'store/slices/user';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Box, Grid, IconButton, InputBase, MenuItem } from '@material-ui/core';

import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from 'react-router-dom';
import Cart from './Cart';
import { MainStyle } from './styles';

const Dashboard = ({ children }) => {
  const history = useHistory();

  const classes = MainStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleBackToHome = () => history.push('/');

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const dispatch = useDispatch();

  const { data } = useQuery([], fetchAuthUser, {
    refetchOnWindowFocus: false,
    retry: false,
  });

  dispatch(setUser(data));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            onClick={handleBackToHome}
          >
            Shop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <main>
        <Box flexGrow={1} marginTop={3}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Cart />
          </Grid>
        </Box>
        <Container className={classes.cardGrid}>{children}</Container>
      </main>
    </div>
  );
};

export default Dashboard;
