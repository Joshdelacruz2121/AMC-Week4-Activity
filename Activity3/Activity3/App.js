import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const morning = [
  {
    id: 'todo1',
    title: '1. Wake-up',
    
  },
  {
    id: 'todo2',
    title: '2. Shower & Eat',
  },
  {
    id: 'todo3',
    title: '3. Prepare a clothes for school later',
  },
  {
        id: 'todo4',
    title: '4. Lunch',
  },
   {
        id: 'todo5',
    title: '5. Go to school',
  },
];
const afternoon = [
  {
    id: 'todo6',
    title: '6. Take a shower',
  },
  {
    id: 'todo7',
    title: '7. Sleep',
  },
  {
    id: 'todo8',
    title: '8. Prepare Anything',
  },
  {
        id: 'todo9',
    title: '9. Get a work',
  },
   {
        id: 'todo10',
    title: '10. Prepare my clothes for school tomorrow',
  },
];

const evening = [
  {
    id: 'todo11',
    title: '11. Take a shower',
  },
  {
    id: 'todo12',
    title: '12. Prepare my clothes',
  },
  {
    id: 'todo13',
    title: '13. Go to bed',
  },
  {
        id: 'todo14',
    title: '14. Use Phone',
  },
   {
        id: 'todo15',
    title: '15. Sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text       style={{
          borderColor: 'red',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold'
        }}> Morning </Text>
      <FlatList
        data={morning}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />
    <Text
    style={{
          borderColor: 'red',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold'
          
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text
      style={{
          borderColor: 'red',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
          fontWeight: 'bold'
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
 
});

export default App;