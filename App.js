import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Splash from './components/SplashScreen';
import Item from './components/Item';
import ListScreen from './components/ListScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Detail from './components/Detail';
import MainScreen from './components/MainScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <MainScreen></MainScreen>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
