import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native-animatable';
import screens from 'utils/screens';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind';
import * as Animatable from 'react-native-animatable';
import StyledText from 'components/StyledText';

const Tab = createBottomTabNavigator();

const NULL = () => null;

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={screens.home}
      screenOptions={{
        headerShown: false,
        tabBarStyle: tw`pt-1 pb-3`,
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
        component={NULL}
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
        }}
        component={NULL}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
