import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {
  Box,
  Button,
  Grid,
} from '@material-ui/core';
import { useQuery } from 'react-query';
import productAPI from 'services/product';
import LoadingIndicator from 'components/LoadingIndicator';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { get, set } from 'utils/storage';
import { useDispatch } from 'react-redux';
import { changeProductToCart } from 'store/slices/cart';
import CommentBox from './CommentBox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cardMedia: {
    height: 300,
  },
  bg: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: '0px 14px',
  },
}));

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const location = useLocation();

  const { id } = queryString.parse(location.search);

  let listLike = JSON.parse(get('likes')) || [];
  const [selected, setSelected] = React.useState(
    !!listLike.find((likeProduct) => likeProduct.id === parseInt(id, 10)),
  );

  const { data: detail, isLoading } = useQuery(
    ['showProduct', id],
    productAPI.showDetailProduct,
  );

  if (isLoading) {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Grid item>
          <LoadingIndicator />
        </Grid>
      </Grid>
    );
  }

  const handleLike = () => {
    setSelected(!selected);
    if (selected) {
      listLike = listLike.filter((likeProduct) => likeProduct.id !== id);
    } else {
      listLike.push(detail);
    }
    set('likes', JSON.stringify(listLike));
  };

  const handleBuy = () => {
    dispatch(changeProductToCart({ ...detail, number: 1 }));
  };

  return (
    <Box display="flex">
      <Grid container>
        <Grid item xs={6}>
          <CardMedia
            className={classes.cardMedia}
            image={detail.image}
            title="Image title"
          />
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Typography align="center" variant="h3">
              {detail.name}
            </Typography>
            <Box padding={5}>
              <Typography align="justify">{detail.description}</Typography>
              <Box marginTop={3}>
                <Typography align="justify">
                  Price: <span>10000 vnd</span>
                </Typography>
              </Box>
              <Box marginTop={10}>
                <Button
                  variant="contained"
                  color={selected ? 'secondary' : 'primary'}
                  className={classes.button}
                  onClick={() => handleLike()}
                >
                  <FavoriteBorderIcon />
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={handleBuy}
                >
                  <ShoppingBasketIcon />
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            Comment
          </Typography>
        </Grid>
        <CommentBox productId={detail.id} />
      </Grid>
    </Box>
  );
};

export default ProductDetail;
