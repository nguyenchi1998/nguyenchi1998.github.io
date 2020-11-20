import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Card, CardActionArea, IconButton } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { useDispatch } from 'react-redux';
import { changeProductToCart } from 'store/slices/cart';
import { get, set } from 'utils/storage';
import { usePushParamsToUrl } from 'helpers';
import { useStyles } from './style';

const Product = ({ detail }) => {
  let listLike = JSON.parse(get('likes')) || [];
  const [selected, setSelected] = React.useState(
    !!listLike.find((likeProduct) => likeProduct.id === detail.id),
  );
  const classes = useStyles();
  const dispatch = useDispatch();

  const pushParamsToUrl = usePushParamsToUrl();

  const handleLike = () => {
    setSelected(!selected);
    if (selected) {
      listLike = listLike.filter((likeProduct) => likeProduct.id !== detail.id);
    } else {
      listLike.push(detail);
    }
    set('likes', JSON.stringify(listLike));
  };

  const handleShowProduct = ({ id }) => {
    pushParamsToUrl({ id }, '/product');
  };

  const handleBuy = () => {
    dispatch(changeProductToCart({ ...detail, number: 1 }));
  };

  return (
    <Grid key={detail.id} item xs={12} sm={3} md={3}>
      <Card className={classes.card}>
        <CardActionArea onClick={() => handleShowProduct(detail)}>
          <CardMedia
            className={classes.cardMedia}
            image={detail.image}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ minHeight: 20 }}
            >
              {detail && detail.name}
            </Typography>
            <Typography noWrap> {detail && detail.description}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: 'flex-end' }}>
          <IconButton
            color={selected ? 'secondary' : 'primary'}
            className={classes.button}
            onClick={() => handleLike()}
          >
            <FavoriteOutlinedIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="add to shopping cart"
            className={classes.button}
            onClick={handleBuy}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
