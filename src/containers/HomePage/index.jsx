import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Pagination } from '@material-ui/lab';
import productAPI from 'services/product';
import { usePushParamsToUrl } from 'helpers';
import LoadingIndicator from 'components/LoadingIndicator';
import { useQuery } from 'react-query';
import Product from './ProductDetail';

const HomePage = () => {
  const location = useLocation();

  const { page } = queryString.parse(location.search);

  const [pageCurrent, setPageCurrent] = useState(page || 0);

  const pushParamsToUrl = usePushParamsToUrl();

  const changePage = (e, newPage) => {
    pushParamsToUrl({ page: newPage });
    setPageCurrent(newPage);
  };

  const { data, isLoading } = useQuery(
    ['fetchProduct', pageCurrent],
    productAPI.fetchProduct,
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

  return (
    <Grid container spacing={4}>
      {data.data.map((detail) => (
        <Product key={detail.id} detail={detail} />
      ))}
      <Box
        marginTop={5}
        display="flex"
        alignContent="center"
        justifyContent="center"
        style={{ width: '100%' }}
      >
        <Box>
          <Pagination
            count={data.totalPage - 1}
            variant="outlined"
            color="primary"
            page={parseInt(pageCurrent === 0 ? 1 : pageCurrent, 10)}
            onChange={changePage}
          />
        </Box>
      </Box>
    </Grid>
  );
};
export default HomePage;
