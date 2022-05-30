import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainNavigator from './Navigation/Shop';

export default function App() {

  const [loaded] = useFonts({
    Koulen: require('./assets/Fonts/Koulen/Koulen-Regular.ttf'),
    LatoRegular: require('./assets/Fonts/Lato/Lato-Regular.ttf')
  });

  if (!loaded) {
    return <ActivityIndicator/>;
  }

  console.log(loaded);
  //console.log(categorySelected);

  return (
    //<SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
      <MainNavigator />
    //</SafeAreaView>
  );
}


