import React, {FC, useState} from 'react';
import {View, TextInput as TI, ViewStyle, TextInputProps} from 'react-native';
import tw from 'tailwind';
import Feather from 'react-native-vector-icons/Feather';

interface IProps extends TextInputProps {
  style?: ViewStyle;
  variant?: 'default' | 'success' | 'danger';
  password?: boolean;
  isSearch?: boolean;
  iconRight?: React.ReactNode;
}

const TextInput: FC<IProps> = ({
  style,
  variant = 'default',
  password,
  isSearch,
  iconRight,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(password);
  return (
    <View style={tw.style('h-[48px] items-center justify-center relative')}>
      <TI
        {...props}
        placeholderTextColor={'#8C8CA1'}
        style={tw.style(
          'h-[48px] px-4 rounded-lg flex-1  w-full justify-center',
          props.value && 'pb-2',
          variant === 'default' && 'bg-accent',
          variant === 'default' && {
            shadowColor: 'rgb(74, 74, 104)',
            shadowOffset: {
              width: 2,
              height: 1,
            },
            shadowOpacity: 0.1,
            shadowRadius: -1,
            elevation: 4,
          },
          variant !== 'default' && 'bg-[#fff]',
          variant === 'success' && {
            borderWidth: 1,
            borderColor: '#1CB66C',
            shadowColor: '#1CB66C',
            shadowOffset: {
              width: 4,
              height: 4,
            },
            shadowOpacity: 0.2,
            shadowRadius: 0,
            elevation: 4,
          },
          variant === 'danger' && {
            borderWidth: 1,
            borderColor: '#E31B23',
            shadowColor: '#E31B23',
            shadowOffset: {
              width: 4,
              height: 4,
            },
            shadowOpacity: 0.2,
            shadowRadius: 0,
            elevation: 4,
          },
          style,
        )}
        autoComplete="off"
        autoCapitalize="none"
        secureTextEntry={showPassword}
      />
      <View style={tw`absolute right-[16px]`}>
        {password ? (
          <Feather
            onPress={() => setShowPassword(pr => !pr)}
            color="#323232"
            size={20}
            name={showPassword ? 'eye' : 'eye-off'}
          />
        ) : (
          <>
            {variant === 'danger' && (
              <Feather size={20} color="#E31B23" name="alert-circle" />
            )}
            {variant === 'success' && (
              <Feather size={20} color="#1CB66C" name="check" />
            )}
          </>
        )}

        {iconRight ? iconRight : null}
      </View>
    </View>
  );
};

export default TextInput;
