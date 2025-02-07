import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      <Text style={styles.italicText}>MONTANEZ</Text>
       <Text style={styles.italicText}>JOSHUA</Text>
       </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 10,
    padding: 30,
    backgroundColor: '#eaeaea',
  },

  title: {
    marginTop: 30,
    paddingVertical: 19,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius:  10,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
   
  },
  boldText: {
    fontWeight: 'italic', 
  },
  italicText: {
    fontStyle: 'italic',
  }
});

export default App;