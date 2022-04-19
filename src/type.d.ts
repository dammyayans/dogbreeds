interface IUser {
  username: string;
}

type AuthState = {
  isAuth: boolean;
  loading: boolean;
  user: IUser | null;
};
