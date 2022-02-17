import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top Left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bot}>
          <Text style={styles.botText}>Bottom Right</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7feff',
    flex: 1,
  },
  containerTop: {
    flex: 1,
  },
  top: {
    marginTop: 80,
    marginHorizontal: 40,
    padding: 20,
    borderWidth: 4,
    borderColor: 'red',
    backgroundColor: 'pink'
  },
  topText: {
    fontSize: 20,
    color: '#509cb8',
    fontWeight: 'bold'
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: '#33ff60',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    fontSize: 20,
    color: '#509cb8',
    fontWeight: 'bold'
  },
  containerBottom: {
    flex: 1,
  },
  bot: {
    marginTop: 80,
    marginHorizontal: 40,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#7ee6fd',

  },
  botText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'right',
  }
});
