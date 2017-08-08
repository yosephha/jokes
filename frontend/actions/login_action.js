export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const login = () => ({
  type: LOGIN_USER,
  currentUser: true
});

export const logout = () => ({
  type: LOGIN_USER,
  currentUser: false
});
