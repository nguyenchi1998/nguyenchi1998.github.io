import React from 'react';
import LoadingIndicator from 'components/Icons/Loading';
import Box from '@material-ui/core/Box';

const loading = ({ light }) => {
  return (
    <Box display="flex" alignItems="center">
      <LoadingIndicator />
      <Box ml={1} style={{ color: light ? 'white' : 'black' }} />
    </Box>
  );
};

export default loading;
