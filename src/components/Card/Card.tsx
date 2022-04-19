import {TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import tw from 'tailwind';
import {ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import StyledText from 'components/StyledText';
import {View} from 'react-native-animatable';

interface ICard {
  style?: ViewStyle;
  name: string;
  isFavourite?: boolean;
  // mainBreed: string;
}

const Card: FC<ICard> = ({style, name, isFavourite, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      style={tw.style(
        'bg-white rounded-lg border border-[#ECF1F4] py-4 px-2 flex-row mb-4 relative',
        'shadow-offset-[2px] elevation-2',
        'shadow-[#9f9fc0] shadow-radius-[20px] shadow-opacity-30',
        style,
      )}>
      <Icon name="dog-side" style={tw`text-primary`} size={24} />
      <View style={tw`ml-4 flex-1`}>
        <StyledText style={tw`text-subtle font-light mb-1`}>
          {/* {mainBreed ? `Breed-${mainBreed}` : 'Breed'} */}
          Breed
        </StyledText>
        <StyledText style={tw`text-indigo font-semibold text-base  text-sm`}>
          {name}
        </StyledText>
        {isFavourite ? (
          <View style={tw`absolute top-0 right-0`}>
            <Icon name="star" style={tw`text-[#f3aa4e]`} size={14} />
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
