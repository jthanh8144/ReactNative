import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

import Item from './components/Item';

function App() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    })()
  })
  return (
    <View style={styles.container}>
      <Item name="Thanh" />
      <Item name="Quan" />
      <Item name="Xu" />
      <Item name="Bito" />
      <Item name="Vy" />
      <Item name="Binh" />
      <StatusBar style="auto" />
    </View>
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

export default App;
