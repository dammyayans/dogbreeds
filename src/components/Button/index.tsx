import {TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import tw from 'tailwind';
import StyledText from 'components/StyledText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loader from 'components/Loader';
import {View} from 'react-native-animatable';

interface IButton {
  title?: string;
  primary?: boolean;
  full?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
}
const Button: FC<IButton> = ({
  children,
  title = '',
  primary = true,
  full = true,
  onPress,
  style = '',
  loading = false,
  textStyle = '',
}) => {
  return (
    <TouchableOpacity
      onPress={!loading ? onPress : () => null}
      style={tw.style(
        'py-4 flex justify-center rounded-lg',
        'shadow-offset-[0px]/[6px] elevation-2',
        'shadow-[#0e0e2f] shadow-radius-[2px] shadow-opacity-10',
        primary && 'bg-primary',
        full && 'w-full',
        style,
      )}>
      {!loading ? (
        <StyledText
          style={tw.style('text-center text-white font-medium', textStyle)}>
          {children ? children : title}
        </StyledText>
      ) : (
        <View style={tw`justify-center items-center`}>
          <Loader color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
