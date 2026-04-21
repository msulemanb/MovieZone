import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { MovieCardType } from './TrendingMovies.types';
import { useNavigation } from '@react-navigation/native';
import { appStrings, sampleImageUrls } from '../constants';

var { width, height } = Dimensions.get('window');
const TrendingMovies = ({ data }) => {
  const ref = React.useRef<ICarouselInstance>(null); // 2. Create a ref for the Carousel component

  const navigation = useNavigation();
  const handleClick = item => {
    navigation.navigate('Movie', item);
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-lg mx-4 mb-5">
        {appStrings.trending}
      </Text>

      <Carousel
        // autoPlay
        ref={ref}
        data={data}
        mode="parallax"
        // This is the width of item
        width={width}
        height={height * 0.6}
        // autoPlay
        containerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}
        renderItem={({ item, ...props }) => (
          <MovieCard
            item={item}
            index={props.index}
            currentIndex={ref.current?.getCurrentIndex()}
            handleClick={handleClick}
          />
        )}
      />
    </View>
  );
};

export default TrendingMovies;

const MovieCard = ({
  item,
  index,
  currentIndex,
  handleClick,
}: MovieCardType) => {
  // const random = Math.floor(Math.random() * pics.length);
  return (
    <TouchableWithoutFeedback
      onPress={() => handleClick(item)}
      className="flex-1 items-center"
    >
      <Image
        style={{
          width: width,
          height: height * 0.6,
          opacity:
            index === currentIndex || currentIndex === undefined ? 1 : 0.5,
        }}
        className="rounded-3xl"
        source={{
          uri: sampleImageUrls[index],
        }}
        alt="none"
      />
    </TouchableWithoutFeedback>
  );
};
