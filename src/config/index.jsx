export const API_HOST = process.env.REACT_APP_API_HOST || 'http://127.0.0.1';
export const API_PORT = process.env.REACT_APP_API_PORT || '8000';
export const API_VERSON = process.env.REACT_APP_API_VERSON || 'api/v1';
export const API_URL = `${API_HOST}:${API_PORT}/${API_VERSON}`;

export const EMAIL_REGEX = /([a-zA-Z0-9_.]+)@[a-zA-Z-_]+?\.[a-zA-Z]{2,3}/;
export const CSV_REGEX = /\.(csv)$/;
export const DATASET_ID_REGEX = /^\d+$/;

export const AUTH_API = {
  SIGN_IN: `/auth/login/`,
  REFRESH_TOKEN: `/auth/token/refresh/`,
  SIGN_UP: `/auth/register/`
}
