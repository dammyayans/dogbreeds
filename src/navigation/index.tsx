import ToastConfig from 'components/ToastConfig';
// import CodePushManager from 'services/CodePushManager';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Routes from './Routes';

const NavProviders = () => {
  return (
    <SafeAreaProvider>
      <Routes />
      <ToastConfig />
    </SafeAreaProvider>
  );
};

export default NavProviders;
