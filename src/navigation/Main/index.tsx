import screens from 'utils/screens';
import TabNavigation from './TabNavigation';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={
          {
            // headerShown: false,
          }
        }>
        <Stack.Screen
          name={screens.dashboard}
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
