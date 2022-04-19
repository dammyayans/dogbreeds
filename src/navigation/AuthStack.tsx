import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from 'screens/AuthScreens/LoginScreen';
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
        <Stack.Screen name={AuthScreens.login} component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthStack;
