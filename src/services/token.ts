const AUTH_TOKEN_KEY_NAME = 'escape-room';

export type Token = string;

export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

export const setToken = (token: Token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = ():void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
