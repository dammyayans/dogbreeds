interface IUser {
  email: string;
  name: string;
}

type AuthState = {
  isAuth: boolean;
  loading: boolean;
  user: IUser | null;
};

type DashboardState = {
  loading: boolean;
  error: string;
  breeds: [string, string[]][];
  filteredBreeds: [string, string[]][] | null;
  favorites: string[];
};

type BreedState = {
  loading: boolean;
  error: string;
  image: string;
  subBreedLoading: boolean;
  subBreedImages: string[];
};
