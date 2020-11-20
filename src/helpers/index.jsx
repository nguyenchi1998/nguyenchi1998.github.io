import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

export const usePushParamsToUrl = () => {
  const history = useHistory();

  const func = (params, path) => {
    history.push({
      ...(path && { pathname: path }),
      search: queryString.stringify(params),
    });
  };

  return func;
};
