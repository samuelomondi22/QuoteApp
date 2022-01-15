import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>How If Feel About you Today!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5372F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#333',

  }
});
