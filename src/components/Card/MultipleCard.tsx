import React, {FC} from 'react';
import tw from 'tailwind';
import {ViewStyle, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledText from 'components/StyledText';
import Card from './Card';
import {useAppSelector} from 'store/hooks';

interface ICard {
  style?: ViewStyle;
  name: string;
  subbreed: [];
  isFavourite: boolean;
  onPress: () => void;
}

const MultipleCard: FC<ICard> = ({
  style,
  name,
  subbreed,
  isFavourite,
  onPress,
}) => {
  const favorites = useAppSelector(data => data.dashboard.favorites);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={tw.style(
        'bg-white rounded-lg border border-[#ECF1F4] p-4 p-4 mb-4',
        'shadow-offset-[2px] p-5 elevation-2',
        'shadow-[#9f9fc0] shadow-radius-[20px] shadow-opacity-30',
        style,
      )}>
      <View style={tw`mb-4 flex-row`}>
        <Icon name="dog-side" style={tw`text-primary`} size={24} />
        <View style={tw`ml-4`}>
          <StyledText style={tw`text-subtle font-light text-sm mb-1`}>
            Breed
          </StyledText>
          <StyledText style={tw`text-indigo font-semibold text-base`}>
            {name}
          </StyledText>
        </View>
        {isFavourite ? (
          <View style={tw`absolute top-0 right-0`}>
            <Icon name="star" style={tw`text-[#f3aa4e]`} size={14} />
          </View>
        ) : null}
      </View>
      <StyledText style={tw`text-indigo font-semibold text-base mb-2`}>
        Sub-breeds
      </StyledText>
      <View style={tw`flex-row justify-between flex-wrap`}>
        {subbreed.map((breed, i) => (
          <Card
            key={i}
            style={tw`w-[47%]`}
            isFavourite={favorites.includes(`${name}-${breed}`)}
            name={breed}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default MultipleCard;
