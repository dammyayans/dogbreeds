import React from 'react';
import {Pressable, View} from 'react-native';
import Toast from 'react-native-toast-message';
import tw from 'tailwind';
import StyledText from './StyledText';

const Alert = ({bg, message, onClose}) => (
  <Pressable style={tw`bg-[${bg}] rounded-[8px] py-4 px-6`} onPress={onClose}>
    <StyledText style={tw`font-medium text-[#fff] text-base`}>
      {message}
    </StyledText>
  </Pressable>
);
const toastConfig = {
  info: ({text1 = '', text2 = '', hide}) => (
    <Alert bg="#3b3b53" message={text1 || text2} onClose={hide} />
  ),
  success: ({text1 = '', text2 = '', hide}) => (
    <Alert bg="#1CB66C" message={text1 || text2} onClose={hide} />
  ),
  danger: ({text1 = '', text2 = '', hide}) => (
    <Alert bg="#EB5757" message={text1 || text2} onClose={hide} />
  ),
};

const ToastConfig = () => {
  return <Toast position="bottom" config={toastConfig} />;
};

export default ToastConfig;
