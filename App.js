import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.fonteBlue}>IMC</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizonte: 15,
    backgroundColor: '#05b0ab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonteBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
