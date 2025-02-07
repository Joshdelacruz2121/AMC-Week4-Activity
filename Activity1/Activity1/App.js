import React from 'react';
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Hawak Kamay
        </Text>
        <Text style={styles.text}>
          Sa ating buhay, hindi naman maiiwasan
          Ang mga pagsubok na tila walang hanggan
          Ngunit kung magkasama tayo
          Walang problema ang hindi natin kayang lagpasan

          Chorus:
          Hawak kamay, hindi ka iiwan
          Sa paglalakbay, tayo'y magkasama
          Kahit na anong mangyari, tayo'y magiging matatag
          Hawak kamay, hindi ka iiwan

          Sa bawat yugto ng ating buhay
          May mga pangarap na tayo'y nagtitiwala
          Ngunit kung magkasama tayo
          Walang pangarap ang hindi natin kayang abutin

          Chorus:
          Hawak kamay, hindi ka iiwan
          Sa paglalakbay, tayo'y magkasama
          Kahit na anong mangyari, tayo'y magiging matatag
          Hawak kamay, hindi ka iiwan

          Bridge:
          At kung mayroong mga pagsubok
          Na tila hindi natin kayang lampasan
          Basta't magkasama tayo
          Walang problema ang hindi natin kayang lagpasan

          Chorus:
          Hawak kamay, hindi ka iiwan
          Sa paglalakbay, tayo'y magkasama
          Kahit na anong mangyari, tayo'y magiging matatag
          Hawak kamay, hindi ka iiwan

          Outro:
          Hawak kamay, hindi ka iiwan
          Sa paglalakbay, tayo'y magkasama
          Kahit na anong mangyari, tayo'y magiging matatag
          Hawak kamay, hindi ka iiwan
        </Text> 
      </ScrollView> 
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    padding: 12,
  },
});

export default App;