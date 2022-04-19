import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from 'components/Button';
import tw from 'tailwind';
import TextInput from 'components/TextInput';
import StyledText from 'components/StyledText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loginUser} from 'store/actions/authActions';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import Toast from 'react-native-toast-message';

const LoginScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const authLoading = useAppSelector(data => data.auth.loading);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorType, setErrorType] = useState<{
    [key: string]: 'default' | 'success' | 'danger';
  }>({
    email: 'default',
    name: 'default',
    password: 'default',
  });

  // input default value to fields
  useEffect(() => {
    setEmail('dammy@foodwize.co');
    setName('damilola');
    setPassword('dammydavid');
    setErrorType({email: 'success', name: 'success', password: 'success'});
  }, []);

  const handleLogin = async () => {
    if (
      errorType.email === 'success' &&
      errorType.name === 'success' &&
      errorType.password === 'success'
    ) {
      dispatch(loginUser({email, name}));
    } else {
      Toast.show({type: 'danger', text1: 'Fill the required fields'});
    }
  };

  // onchange function  for fields
  const onChangeText = (text, name) => {
    name === 'email' && setEmail(text);
    name === 'name' && setName(text);
    name === 'password' && setPassword(text);
    if (text) {
      if (name === 'email') {
        setErrorType({...errorType, email: 'success'});
      } else if (name === 'name') {
        setErrorType({...errorType, name: 'success'});
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
          <StyledText
            style={tw`text-[40px] font-bold text-indigo mb-[50px] mt-[48px]`}>
            Log in
          </StyledText>
          <StyledText style={tw`text-base font-semibold text-indigo mb-2`}>
            Email
          </StyledText>
          <TextInput
            placeholder="Enter your email"
            style={tw`text-base font-normal`}
            value={email}
            onChangeText={text => onChangeText(text, 'email')}
            variant={errorType.email}
          />
          <StyledText style={tw`text-base font-semibold text-indigo mb-2 mt-7`}>
            Name
          </StyledText>
          <TextInput
            placeholder="Enter your name"
            style={tw`text-base font-normal`}
            value={name}
            onChangeText={text => onChangeText(text, 'name')}
            variant={errorType.name}
          />
          <StyledText style={tw`text-base font-semibold text-indigo mt-7 mb-2`}>
            Password
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
            loading={authLoading}
            style={tw`bg-[#E31B23] mt-10 text-sm font-semibold`}>
            Login
          </Button>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
