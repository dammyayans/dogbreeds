import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import StyledText from 'components/StyledText';
import tw from 'tailwind';
import LoadableImage from 'components/LoadableImage';
import {hp} from 'utils/responsive';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  clearBreedInfo,
  getBreedImage,
  getSubBreedImages,
} from 'store/actions/dashboardActions';
import FavouriteButton from 'components/FavouriteButton';

const BreedDetails = ({route}) => {
  const breedName = route.params?.breed;
  const subbreeds = route.params?.subbreed;
  const dispatch = useAppDispatch();
  const breedInfo = useAppSelector(data => data.breed);
  const favorites = useAppSelector(data => data.dashboard.favorites);

  useEffect(() => {
    dispatch(clearBreedInfo());
    dispatch(getBreedImage(breedName));
    if (subbreeds) {
      dispatch(getSubBreedImages(breedName, subbreeds));
    }
  }, [breedName, subbreeds]);

  return (
    <ScrollView style={tw`flex-1 px-6`}>
      <StyledText style={tw`text-[40px] capitalize font-bold text-indigo my-6`}>
        {breedName}
      </StyledText>
      <View style={tw`w-full h-${hp(8)} mb-2`}>
        <LoadableImage uri={breedInfo?.image} isLoading={breedInfo?.loading} />
      </View>
      <View style={tw`mb-6 items-end`}>
        <FavouriteButton
          isFavourite={favorites.includes(breedName)}
          name={breedName}
        />
      </View>
      {subbreeds ? (
        <View>
          <StyledText style={tw`text-xl capitalize font-bold text-indigo mb-4`}>
            Sub-breeds
          </StyledText>

          <View>
            {subbreeds.map((breed, i) => (
              <View key={i} style={tw`rounded-[4px] bg-accent mb-4 pb-2`}>
                <View style={tw`w-full h-[150px] mb-2`}>
                  <LoadableImage
                    uri={
                      breedInfo.subBreedImages?.length &&
                      breedInfo.subBreedImages[i]
                    }
                    isLoading={breedInfo.subBreedLoading}
                  />
                </View>
                <View style={tw`flex-row justify-between`}>
                  <StyledText style={tw`text-base capitalize mx-2`}>
                    {breed}
                  </StyledText>
                  <FavouriteButton
                    isFavourite={favorites.includes(`${breedName}-${breed}`)}
                    name={`${breedName}-${breed}`}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

export default BreedDetails;
