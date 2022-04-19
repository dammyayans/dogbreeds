import {NavigationContainer} from '@react-navigation/native';

import AppStack from './Main';
import AuthStack from './AuthStack';

const Routes = () => {
  return (
    <NavigationContainer>
      {true ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
