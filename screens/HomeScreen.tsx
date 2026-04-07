import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import TrendingMovies from '../components/TrendingMovies';
import { useState } from 'react';

export default function () {
  const ios = Platform.OS === 'ios';
  const [trending, setTrending] = useState([1, 2, 3]);
  return (
    <View style={{ flex: 1, backgroundColor: '#262626' }}>
      {/* search bar and logo */}
      <SafeAreaView style={{ marginBottom: ios ? -2 : 3 }}>
        <StatusBar barStyle="light-content" />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 4,
            // backgroundColor: 'orange',
          }}
        >
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={styles.text}>
            <Text style={styles.highlight}>M</Text>ovie{' '}
            <Text style={styles.highlight}>Z</Text>one
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending Movies */}
        <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontSize: 30, // text-3xl
    fontWeight: '700', // font-bold
  },
  highlight: {
    color: 'orange',
  },
});
