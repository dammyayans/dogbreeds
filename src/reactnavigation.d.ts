import screens from 'utils/screens';

export type RootStackParamList = {
  [screens.home]: undefined;
  [screens.dashboard]: undefined;
  [screens.home]: undefined;
  [screens.breedInfo]: undefined;
};

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
