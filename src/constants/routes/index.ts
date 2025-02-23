const ROOT = '/';

const SIGN_UP = 'signup';

const DASHBOARD = 'dashboard';

export const ABSOLUTE_ROUTES = {
  ROOT: ROOT,
  SIGN_UP: `${ROOT}${SIGN_UP}`,
  DASHBOARD: `${ROOT}${DASHBOARD}`,
};

export const UNPROTECTED_ROUTES = new Set([
  ABSOLUTE_ROUTES.ROOT,
  ABSOLUTE_ROUTES.SIGN_UP,
]);

const API_BASE_URL = `${ROOT}api`;

const AUTH_API_BASE = `${API_BASE_URL}/auth`;

export const API_ROUTES = {
  SIGN_IN: `${AUTH_API_BASE}/signin`,
  SIGN_UP: `${AUTH_API_BASE}/signup`,
  SIGN_OUT: `${AUTH_API_BASE}/signout`,
};
