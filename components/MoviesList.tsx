import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

var { width, height } = Dimensions.get('window');

const MoviesList = ({ title, data }) => {
  let movieName = 'Ant man and the wasp quqntumania';
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl my-4">{title} </Text>
        <TouchableOpacity>
          <Text className="text-orange-400 text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate('Movie', item);
              }}
            >
              <View className="space-y-1 mr-4">
                <Image
                  className="rounded-3xl"
                  source={{
                    uri: 'https://images.freeimages.com/images/large-previews/e5f/vibrant-circuit-board-0410-5708736.jpg',
                  }}
                  style={{ width: width * 0.33, height: height * 0.22 }}
                />
              </View>
              <Text className="text-neutral-300 ml-1">
                {movieName.length > 14
                  ? movieName.slice(0, 14) + '...'
                  : movieName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MoviesList;
