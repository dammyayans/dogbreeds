import screens from 'utils/screens';
import TabNavigation from './TabNavigation';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BreedDetails from 'screens/Dashboard/BreedDetails';

const Stack = createNativeStackNavigator();

export const HeaderLeft = HeaderBackButtonProps => (
  <Pressable
    style={({pressed}) => [
      {opacity: pressed ? 0.5 : 1, marginLeft: 0, paddingRight: 14},
    ]}
    {...HeaderBackButtonProps}>
    <Icon name="arrow-back" size={24} />
  </Pressable>
);

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
        <Stack.Screen
          name={screens.breedInfo}
          component={BreedDetails}
          options={({navigation}) => ({
            headerShown: true,
            headerLeft: props => (
              <HeaderLeft {...props} onPress={() => navigation.goBack()} />
            ),
          })}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStack;
