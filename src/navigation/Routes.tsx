import {NavigationContainer} from '@react-navigation/native';

import AppStack from './Main';
import AuthStack from './AuthStack';
import {useAppSelector} from 'store/hooks';
import {RootState} from 'store';

const Routes = () => {
  const isAuth = useAppSelector((state: RootState) => state.auth.isAuth);
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
