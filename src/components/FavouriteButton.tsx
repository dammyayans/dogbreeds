import {TouchableOpacity} from 'react-native';
import {updateFavorite} from 'store/actions/dashboardActions';
import {useAppDispatch} from 'store/hooks';
import tw from 'tailwind';
import StyledText from './StyledText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavouriteButton = ({isFavourite = false, name}) => {
  const dispatch = useAppDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        dispatch(updateFavorite(isFavourite ? 'remove' : 'add', name));
      }}
      activeOpacity={0.8}
      style={tw`flex-row p-2 items-center`}>
      <StyledText style={tw`mr-1`}>{isFavourite ? 'Remove' : 'Add'}</StyledText>
      <Icon
        name={isFavourite ? 'star' : 'star-outline'}
        style={tw`text-[#f3aa4e]`}
        size={14}
      />
    </TouchableOpacity>
  );
};

export default FavouriteButton;
