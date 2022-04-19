import React, {FC, ReactNode} from 'react';
import {Text, TextStyle} from 'react-native';
import tw from 'tailwind';

interface IProps {
  style?: TextStyle;
  children: ReactNode;
}

const StyledText: FC<IProps> = ({children, style}) => {
  return <Text style={tw.style('', style)}>{children}</Text>;
};

export default StyledText;
