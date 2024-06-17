import { createAsyncThunk } from '@reduxjs/toolkit';
import { TUser } from 'types/user.ts';
import { AxiosInstance } from 'axios';
import { EndPoint } from '../../const.ts';
import { dropToken, saveToken } from 'services/token.ts';

const checkAuth = createAsyncThunk<TUser, void, { extra: AxiosInstance }>(
  'auth/checkAuth',
  async (_arg, { extra: api }) => {
    const response = await api.get<TUser>(EndPoint.Login);
    return response.data;
  },
);

type LoginData = {
  email: string;
  password: string;
};

const login = createAsyncThunk<TUser, LoginData, { extra: AxiosInstance }>(
  'auth/login',
  async (body, { extra: api }) => {
    const response = await api.post<TUser>(EndPoint.Login, body);
    saveToken(response.data.token);
    return response.data;
  },
);

const logout = createAsyncThunk<unknown, undefined, { extra: AxiosInstance }>(
  'auth/logout',
  async (_, { extra: api }) => {
    await api.delete(EndPoint.Logout);
    dropToken();
  },
);

export { checkAuth, login, logout };
