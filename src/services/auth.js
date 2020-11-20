import { request, baseRequest } from 'utils/request';
import { getAccessToken, setAuthToken, removeAuthToken } from 'utils/storage';
import { AUTH_API } from 'config';

export const isAuthenticated = () => !!getAccessToken();

export const signIn = (credential) => {
  return new Promise((resolve, reject) => {
    baseRequest()
      .post(AUTH_API.SIGN_IN, credential)
      .then((response) => {
        setAuthToken(response.data);
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const fetchAuthUser = async () => {
  const { data } = await request().get('/profile');

  return data;
};

export const changePassword = (credential, userId) => {
  return new Promise((resolve, reject) => {
    request()
      .post(`users/${userId}/reset-password/`, credential)
      .then((response) => {
        removeAuthToken();
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const signUp = (credential) => {
  return new Promise((resolve, reject) => {
    baseRequest()
      .post(AUTH_API.SIGN_UP, credential)
      .then((response) => {
        return resolve(response);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};

export const signOut = () => {
  removeAuthToken();
  window.location.reload();
};
