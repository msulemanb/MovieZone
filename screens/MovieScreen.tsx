import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { height, width } from '../constants/dimensions';
import { sampleDescription1, sampleImageUrls } from '../constants';

const MovieScreen = () => {
  const { params: item } = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();
  const ios = Platform.OS === 'ios';
  const topMargin = ios ? '' : 'mt-3';
  let movieName = 'Ant man and the wasp quqntumania';
  useEffect(() => {
    // call the movies detail api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
    >
      {/* back button and movie poster */}
      <View className="w-full">
        <SafeAreaView
          className={
            'absolute z-20 w-full flex-row justify-between items-center px-4' +
            topMargin
          }
        >
          <TouchableOpacity
            style={styles.background}
            className="ml-4 rounded-xl p-1"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsFavourite(prev => !prev)}
            className="mr-4"
          >
            <HeartIcon
              size="35"
              color={isFavourite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri: sampleImageUrls[4],
            }}
            style={{ height: height * 0.55, width }}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.5)', 'rgba(23,23,23,1)']}
            style={{ width, height: height * 0.55 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* movie details */}
      <View style={{ marginTop: -height * 0.09 }} className="space-y-3">
        {/* title */}
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        {/* status, release, runtime*/}
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Release | 2020 | 170 mins
        </Text>
        {/* genres */}
        <View className="flex-row justify-center mx-4 space-x-2">
          {['Action', 'Thriller', 'Comedy'].map((val, ind) => (
            <Text className="text-neutral-400 font-semibold text-base text-center">
              {val + (ind === 2 ? '' : ' | ')}
            </Text>
          ))}
        </View>
        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">
          {sampleDescription1}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
