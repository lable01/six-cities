const AUTH_TOKEN_KEY = 'six-cities';

export type Token = string;

const getToken = () => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';
const saveToken = (token: Token) => localStorage.setItem(AUTH_TOKEN_KEY, token);
const dropToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);

export { getToken, saveToken, dropToken };
