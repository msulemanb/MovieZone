import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

const data2 = [
  {
    title: 'Slide 1',
    content: 'Slide 1 Content',
  },
  {
    title: 'Slide 2',
    content: 'Slide 2 Content',
  },
  {
    title: 'Slide 3',
    content: 'Slide 3 Content',
  },
];

const TrendingMovies = ({ data }) => {
  const ref = React.useRef<ICarouselInstance>(null); // 2. Create a ref for the Carousel component

  return (
    <View className="mb-8">
      <Text className="text-white text-lg mx-4 mb-5">Trending</Text>

      <Carousel
        ref={ref}
        data={data2}
        width={200}
        height={400}
        style={{ backgroundColor: 'white' }} // 4. Provide size via the style prop
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />

      {/* <Carousel
        data={data}
        renderItem={({ item }) => <Text>{item}</Text>}
        firstitem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={600}
        itemWidth={400}
        // slideStyle={{ alignItems: 'center' }}
      /> */}
    </View>
  );
};

export default TrendingMovies;

const styles = StyleSheet.create({});
