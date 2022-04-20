import {Pressable, View, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import tw from 'tailwind';
import {SafeAreaView} from 'react-native-safe-area-context';
import StyledText from './StyledText';
import {hp} from 'utils/responsive';
import LoadableImage from './LoadableImage';
import FavouriteButton from './FavouriteButton';
import {useAppSelector} from 'store/hooks';
import {useRandomImage} from 'utils/hooks';

const ShowBreedModal = ({visible, setVisible}) => {
  const {image, breedName, loading} = useRandomImage(visible);
  const favorites = useAppSelector(data => data.dashboard.favorites);

  return (
    <Modal visible={visible} supportedOrientations={['portrait']}>
      <SafeAreaView style={tw`flex-1 p-6`}>
        <View style={tw`items-end mt-6 mr-1`}>
          <Pressable
            onPress={() => {
              setVisible(false);
            }}>
            <StyledText style={tw`text-primary font-semibold text-base`}>
              close
            </StyledText>
          </Pressable>
        </View>
        <View style={tw`flex-1 justify-center`}>
          <View style={tw`w-full h-${hp(12)} mb-2`}>
            <LoadableImage uri={image} isLoading={loading} />
          </View>
          <View style={tw`mb-6 items-end`}>
            <FavouriteButton
              isFavourite={favorites.includes(breedName)}
              name={breedName}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ShowBreedModal;
