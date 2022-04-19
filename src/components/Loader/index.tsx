import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/AntDesign';
import tw from 'tailwind';

const Loader = ({style = {}, color = '#E31B23'}) => (
  <Animatable.View
    style={style}
    animation="rotate"
    iterationCount="infinite"
    duration={500}>
    <Icon name="loading1" size={24} style={tw`text-[${color}]`} />
  </Animatable.View>
);
export default Loader;
