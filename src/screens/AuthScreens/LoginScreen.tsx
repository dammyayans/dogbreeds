import {
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from 'components/Button';
import tw from 'tailwind';
import TextInput from 'components/TextInput';
import StyledText from 'components/StyledText';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginScreen = ({navigation}) => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorType, setErrorType] = useState<{
    [key: string]: 'default' | 'success' | 'danger';
  }>({
    username: 'default',
    password: 'default',
  });

  const handleLogin = async () => {
    if (errorType.username === 'success' && errorType.password === 'success') {
    }
  };

  const onChangeText = (text, name) => {
    name === 'username' && setEmail(text);
    name === 'password' && setPassword(text);
    if (text) {
      if (name === 'username') {
        setErrorType({...errorType, username: 'success'});
      } else if (name === 'password' && text.length > 5) {
        setErrorType({...errorType, password: 'success'});
      } else {
        setErrorType({...errorType, [name]: 'danger'});
      }
    } else {
      setErrorType({...errorType, [name]: 'danger'});
    }
  };
  return (
    <TouchableWithoutFeedback style={tw`flex-1`} onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={tw`flex-1`}>
        <SafeAreaView style={tw`bg-background flex-1 px-6`}>
          {/* <View style={tw`flex-row justify-between`}>
            <Pressable style={tw``} onPress={() => navigation.goBack()}>
              <AntDesign name="close" />
            </Pressable>
          </View> */}
          <Text
            style={tw`text-[40px] font-bold text-indigo mb-[50px] mt-[48px]`}>
            Log in
          </Text>
          <StyledText style={tw`text-base font-semibold text-indigo mb-2`}>
            Enter your username
          </StyledText>
          <TextInput
            placeholder="Enter your username"
            style={tw`text-base font-normal`}
            value={username}
            onChangeText={text => onChangeText(text, 'username')}
            variant={errorType.username}
          />
          <StyledText style={tw`text-base font-semibold text-indigo mt-7 mb-2`}>
            Enter your password
          </StyledText>
          <TextInput
            placeholder="Enter your password"
            style={tw`text-base font-normal`}
            value={password}
            password
            onChangeText={text => onChangeText(text, 'password')}
            variant={errorType.password}
          />
          <Button
            onPress={handleLogin}
            // loading={loading}
            style={tw`bg-[#E31B23] mt-10 text-sm font-semibold`}>
            Login
          </Button>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
