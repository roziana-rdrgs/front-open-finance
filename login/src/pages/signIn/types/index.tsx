/* eslint-disable @typescript-eslint/no-explicit-any */
import { IErrors, IUser } from '../../../types';

export interface ILoginForm {
  username: string;
  password: string;
}

export interface IFormSign {
  onSubmit: (values: ILoginForm) => void;
}

export interface ILoginResponse {
  token: {
    accessToken: string;
    crossToken: string;
    idToken: string;
    expiresIn: number;
  };
  user: IUser;
  errors: Array<any> | null;
}

export interface SignInContextData {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  listErrors: IErrors[] | null;
  setListErrors: React.Dispatch<IErrors[] | null>;
}
