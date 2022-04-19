import {View, Image} from 'react-native';
import React, {useState} from 'react';
import tw from 'tailwind';
import Loader from 'components/Loader';

const LoadableImage = ({uri, isLoading}) => {
  const [loading, setLoading] = useState(true);
  const onLoadEnd = () => {
    setLoading(false);
  };

  return (
    <View style={tw`flex-1 bg-[rgba(0,0,0,0.2)]`}>
      {uri ? (
        <Image
          style={tw`h-full w-full`}
          onLoadEnd={onLoadEnd}
          source={{uri: uri}}
          resizeMode="cover"
        />
      ) : null}
      {loading || isLoading ? (
        <View
          style={tw`absolute top-0 bottom-0 right-0 left-0 justify-center items-center`}>
          <Loader />
        </View>
      ) : null}
    </View>
  );
};

export default LoadableImage;
