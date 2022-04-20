import {AxiosError} from 'axios';
import {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {getRandomBreed} from './api';

const returnBreedName = (url: string) => {
  if (!url) {
    return '';
  }
  const splitedString = url.split('/');
  const breedIndex = splitedString?.length ? splitedString.length - 2 : null;
  return breedIndex ? splitedString[breedIndex] : '';
};

export const useRandomImage = visibility => {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState('');

  useEffect(() => {
    const randomImage = async () => {
      try {
        const res = await getRandomBreed();
        setImage(res?.message);
        setLoading(false);
      } catch (e) {
        const error = e as AxiosError;
        if (error.response) {
          Toast.show({
            type: 'danger',
            text1: error.response.data.errors,
          });
        } else {
          Toast.show({
            type: 'danger',
            text1: String(e),
          });
        }
      }
    };
    if (visibility) randomImage();
    else {
      setLoading(true);
      setImage('');
    }
  }, [visibility]);

  return {image, loading, breedName: returnBreedName(image)};
};
