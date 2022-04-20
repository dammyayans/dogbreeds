import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind';
import {useAppSelector} from 'store/hooks';
import Button from 'components/Button';
import ShowBreedModal from 'components/ShowBreedModal';

const ProfileScreen = () => {
  const authData = useAppSelector(data => data.auth);
  const favorites = useAppSelector(data => data.dashboard.favorites);
  const [visible, setVisible] = useState(false);
  return (
    <ScrollView style={tw`px-[24px] py-[20px] bg-[#F8F8F8]]`}>
      <View style={tw`mt-[20px] ml-[7px] mr-[7px] `}>
        {authData.user?.name && (
          <View style={tw`flex flex-row justify-between mb-[20px]`}>
            <Text style={tw`text-[14px] font-medium `}>Name</Text>
            <Text style={tw`text-[14px] font-light `}>
              {authData.user?.name}
            </Text>
          </View>
        )}
        <View style={tw`flex flex-row justify-between mb-[20px]`}>
          <Text style={tw`text-[14px] font-medium `}>Email</Text>
          <Text style={tw`text-[14px] font-light `}>
            {authData.user?.email}
          </Text>
        </View>
        <View style={tw`mb-[20px]`}>
          <Text style={tw`text-[14px] font-medium mb-4`}>My Favovorites</Text>
          {favorites.length ? (
            favorites.map(fav => (
              <Text
                key={fav}
                style={tw`text-[14px] font-light mb-2 capitalize`}>
                - {fav}
              </Text>
            ))
          ) : (
            <Text style={tw`text-[14px] font-light `}>Empty</Text>
          )}
        </View>
        <View style={tw`mb-[20px]`}>
          <Text style={tw`text-[14px] font-medium mb-4`}>Random breed</Text>
          <Button onPress={() => setVisible(true)}>show</Button>
        </View>
      </View>
      <ShowBreedModal visible={visible} setVisible={setVisible} />
    </ScrollView>
  );
};

export default ProfileScreen;
