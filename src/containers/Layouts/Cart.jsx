import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Popover,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  selectProductCart,
  changeProductToCart,
  selectCart,
} from 'store/slices/cart';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  rootCart: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  titleCart: {
    margin: theme.spacing(4, 0, 2),
  },
  btnCart: {
    minHeight: 50,
    minWidth: 100,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Cart = () => {
  const classes = useStyles();

  const cart = useSelector(selectCart);

  const counterCart = useSelector(selectProductCart);

  const [openCart, setOpenCart] = React.useState(null);

  const handleClick = (event) => {
    setOpenCart(event.currentTarget);
  };

  const handleClose = () => {
    setOpenCart(null);
  };

  const open = Boolean(openCart);

  const id = open ? 'simple-popover' : undefined;

  const dispatch = useDispatch();

  const handleRemoveProduct = (productId) => {
    dispatch(
      changeProductToCart({
        id: productId,
        number: 1,
        deleteProduct: true,
      }),
    );
  };

  const plusProduct = (productId) => {
    dispatch(
      changeProductToCart({
        id: productId,
        number: 1,
      }),
    );
  };

  const subProduct = (product) => {
    dispatch(
      changeProductToCart({
        id: product.id,
        number: -1,
      }),
    );
  };

  return (
    <Grid item xs={1}>
      <Button
        className={classes.btnCart}
        aria-label="cart"
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <StyledBadge badgeContent={counterCart} color="secondary">
          <ShoppingCartIcon fontSize="large" style={{ minHeight: 40 }} />
        </StyledBadge>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={openCart}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box className={classes.rootCart}>
          {cart.length ? (
            <>
              <List>
                {cart.map((product, index) => (
                  <Box key={product.id}>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar src={product.image} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography style={{ minWidth: 200 }}>
                            {product.name}
                            <Typography
                              style={{ color: 'red', marginLeft: 5 }}
                              variant="caption"
                              gutterBottom
                            >
                              {product.price} vnd
                            </Typography>
                          </Typography>
                        }
                        secondary={
                          <Typography>
                            {cart.find((el) => el.id === product.id).price *
                              cart.find((el) => el.id === product.id).number}
                            <Typography
                              style={{ color: 'red', marginLeft: 5 }}
                              variant="caption"
                              gutterBottom
                            >
                              vnd
                            </Typography>
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Box display="flex" justifyContent="center">
                          <Box>
                            <Box>
                              <IconButton
                                aria-label="delete"
                                className={classes.margin}
                                size="small"
                                onClick={() => plusProduct(product.id)}
                              >
                                <ArrowUpwardIcon fontSize="inherit" />
                              </IconButton>
                            </Box>
                            <Box>
                              <Typography align="center">
                                {product.number}
                              </Typography>
                            </Box>
                            <Box>
                              <IconButton
                                aria-label="delete"
                                className={classes.margin}
                                size="small"
                                disabled={
                                  !!cart.find(
                                    (el) =>
                                      el.id === product.id && el.number === 1,
                                  )
                                }
                                onClick={() => subProduct(product)}
                              >
                                <ArrowDownwardIcon fontSize="inherit" />
                              </IconButton>
                            </Box>
                          </Box>
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleRemoveProduct(product.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider
                      style={{
                        display: index === cart.length - 1 ? 'none' : 'block',
                      }}
                    />
                  </Box>
                ))}
              </List>
              <Box
                style={{ marginBottom: 10 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  style={{ minWidth: 300 }}
                  variant="outlined"
                  color="secondary"
                >
                  Show all
                </Button>
              </Box>
            </>
          ) : (
            <Box
              minHeight={100}
              minWidth={200}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography style={{ fontWeight: 'bold' }} align="center">
                Empty Cart
              </Typography>
            </Box>
          )}
        </Box>
      </Popover>
    </Grid>
  );
};

export default Cart;
