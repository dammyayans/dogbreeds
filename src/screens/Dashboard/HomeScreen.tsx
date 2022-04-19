import {View, TouchableWithoutFeedback, Keyboard, FlatList} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Card from 'components/Card/Card';
import tw from 'tailwind';
import TextInput from 'components/TextInput';
import Icon from 'react-native-vector-icons/AntDesign';
import MultipleCard from 'components/Card/MultipleCard';
import screens from 'utils/screens';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  clearFilteredBreeds,
  filterBreeds,
  getBreeds,
} from 'store/actions/dashboardActions';
import Loader from 'components/Loader';
import StyledText from 'components/StyledText';

const HomeScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const dashboard = useAppSelector(state => state.dashboard);
  const [search, setSearch] = useState('');

  const breeds = useMemo(() => {
    return dashboard.filteredBreeds
      ? dashboard.filteredBreeds
      : dashboard.breeds;
  }, [dashboard, search]);
  // console.log({breeds});

  useEffect(() => {
    dispatch(getBreeds());
    dispatch(clearFilteredBreeds());
    setSearch('');
  }, []);

  const renderItem = ({item}) =>
    item[1]?.length ? (
      <MultipleCard
        onPress={() =>
          navigation.navigate(screens.breedInfo, {
            breed: item[0],
            subbreed: item[1],
          })
        }
        isFavourite={dashboard.favorites.includes(item[0])}
        subbreed={item[1]}
        style={tw`w-full`}
        name={item[0]}
      />
    ) : (
      <Card
        isFavourite={dashboard.favorites.includes(item[0])}
        onPress={() => navigation.navigate(screens.breedInfo, {breed: item[0]})}
        style={tw`w-[47%]`}
        name={item[0]}
      />
    );

  const onTextChange = text => {
    setSearch(text);
    if (text) {
      dispatch(filterBreeds(text));
    } else {
      dispatch(clearFilteredBreeds());
    }
  };

  return (
    // <>
    <View style={tw`flex-1 pt-[40px]`}>
      <View style={tw`px-6 h-[48px] mb-6`}>
        <TextInput
          value={search}
          onChangeText={onTextChange}
          placeholder="Search breed"
          iconRight={<Icon style={tw`text-indigo`} type="search" size={24} />}
        />
      </View>
      {dashboard.loading ? (
        <View style={tw`flex-1 justify-center items-center`}>
          <Loader />
        </View>
      ) : breeds?.length ? (
        <FlatList
          data={breeds}
          renderItem={renderItem}
          keyExtractor={item => item[0]}
          columnWrapperStyle={tw`flex-row justify-between mt-3 px-6 flex-wrap`}
          numColumns={2}
        />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={tw`flex-1 justify-center items-center`}>
            <StyledText>No Breed Available</StyledText>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
    // </>
  );
};

export default HomeScreen;
