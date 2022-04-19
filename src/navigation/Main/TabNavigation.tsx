import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screens from 'utils/screens';

const Tab = createBottomTabNavigator();

const NULL = () => null;

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={screens.home}
      screenOptions={{
        headerShown: false,
      }}
      // tabBar={props => <TabsUI tabs={props.state.routes} {...props} />}
      // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name={screens.home} component={NULL} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
