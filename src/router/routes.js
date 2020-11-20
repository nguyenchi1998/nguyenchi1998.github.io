import loadable from 'utils/loadable';
import { PATHS } from 'router/paths';

const HomePage = loadable(() => import('containers/HomePage'));
const AuthLayout = loadable(() => import('containers/Layouts/Auth'));
const SignInPage = loadable(() => import('containers/Auth/SignInPage'));
const SignUpPage = loadable(() => import('containers/Auth/SignUpPage'));
const UserProfilePage = loadable(() =>
  import('containers/Auth/ProfileUserPage'),
);
const ProductDetail = loadable(() => import('containers/ProductDetailPage'));

const routes = [
  {
    path: PATHS.HOME_PAGE,
    exact: true,
    component: HomePage,
    noPageTitle: true,
    isPublic: true,
  },
  {
    path: PATHS.PRODUCT_DETAIL,
    exact: true,
    component: ProductDetail,
    noPageTitle: true,
    isPublic: true,
  },
  {
    path: PATHS.SIGN_UP_PAGE,
    component: SignUpPage,
    layout: AuthLayout,
    isPublic: true,
  },
  {
    path: PATHS.SIGN_IN_PAGE,
    component: SignInPage,
    layout: AuthLayout,
    isPublic: true,
  },
  {
    path: PATHS.PROFILE_PAGE,
    component: UserProfilePage,
  },
];

export default routes;
