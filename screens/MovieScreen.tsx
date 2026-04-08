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
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { styles, theme } from '../theme';
import { height, width } from '../constants/dimensions';
import { sampleImageUrls } from '../constants';

const MovieScreen = () => {
  const { params: item } = useRoute();
  const [isFavourite, setIsFavourite] = useState(false);
  const navigation = useNavigation();
  const ios = Platform.OS === 'ios';
  const topMargin = ios ? '' : 'mt-3';
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
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieScreen;
