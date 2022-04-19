import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from 'screens/AuthScreens/Login';
import {AuthScreens} from 'utils/screens';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={AuthScreens.login}>
        <Stack.Screen name={AuthScreens.login} component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
