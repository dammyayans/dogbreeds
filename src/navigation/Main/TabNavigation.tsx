import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native-animatable';
import screens from 'utils/screens';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind';
import * as Animatable from 'react-native-animatable';
import StyledText from 'components/StyledText';
import HomeScreen from 'screens/Dashboard/HomeScreen';
import ProfileScreen from 'screens/Dashboard/ProfileScreen';
import {Pressable} from 'react-native';
import {useAppDispatch} from 'store/hooks';
import {logoutUser} from 'store/actions/authActions';

const HeaderRight = () => {
  const dispatch = useAppDispatch();
  return (
    <Pressable style={tw`mr-6`} onPress={() => dispatch(logoutUser())}>
      <StyledText style={tw`text-primary font-semibold text-base`}>
        Sign Out
      </StyledText>
    </Pressable>
  );
};
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={screens.home}
      screenOptions={{
        tabBarStyle: tw`pt-1 pb-3`,
        headerTitleStyle: tw`text-2xl font-bold text-left pb-2 mx-3`,
        headerTitleAlign: 'left',
        headerStyle: tw`h-[120px]`,
      }}
      // tabBar={props => <TabsUI tabs={props.state.routes} {...props} />}
      // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name={screens.home}
        options={{
          tabBarIcon: ({focused}) => (
            <Animatable.View
              animation="fadeIn"
              style={tw`justify-center items-center`}>
              <Icon
                name="home"
                style={tw`text-${focused ? 'primary' : '[#000]'}`}
                size={focused ? 28 : 24}
              />

              {!focused ? (
                <StyledText
                  style={tw`text-base text-${focused ? 'primary' : '[#000]'}`}>
                  Home
                </StyledText>
              ) : null}
            </Animatable.View>
          ),
          tabBarLabel: () => null,
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name={screens.profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Animatable.View
              animation="fadeIn"
              style={tw`justify-center items-center`}>
              <Icon
                name="user"
                style={tw`text-${focused ? 'primary' : '[#000]'}`}
                size={focused ? 28 : 24}
              />

              {!focused ? (
                <StyledText
                  style={tw`text-base text-${focused ? 'primary' : '[#000]'}`}>
                  Profile
                </StyledText>
              ) : null}
            </Animatable.View>
          ),
          tabBarLabel: () => null,
          headerRight: HeaderRight,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
