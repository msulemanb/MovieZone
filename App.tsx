/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import AppNavigation from './navigation/appNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {
  // const safeAreaInsets = useSafeAreaInsets();

  return <AppNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  text: {
    fontSize: 28,
    color: 'purple',
  },
});

export default App;
