import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// Data for morning, afternoon, and evening tasks
const morning = [
  { id: 'todo1', title: '1. Wake-up' },
  { id: 'todo2', title: '2. Shower & Eat' },
  { id: 'todo3', title: '3. Prepare clothes for school' },
  { id: 'todo4', title: '4. Lunch' },
  { id: 'todo5', title: '5. Go to school' },
];

const afternoon = [
  { id: 'todo6', title: '6. Take a shower' },
  { id: 'todo7', title: '7. Sleep' },
  { id: 'todo8', title: '8. Prepare Anything' },
  { id: 'todo9', title: '9. Get to work' },
  { id: 'todo10', title: '10. Prepare clothes for school tomorrow' },
];

const evening = [
  { id: 'todo11', title: '11. Take a shower' },
  { id: 'todo12', title: '12. Prepare clothes' },
  { id: 'todo13', title: '13. Go to bed' },
  { id: 'todo14', title: '14. Use Phone' },
  { id: 'todo15', title: '15. Sleep' },
];

// Color arrays for each section
const morningColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
const afternoonColors = ['#FFC300', '#FF5733', '#DAF7A6', '#33FF57', '#C70039'];
const eveningColors = ['#581845', '#900C3F', '#C70039', '#FF5733', '#FFBD33'];

// Item component for FlatList
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

// Main App component
const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Render function for FlatList items
  const renderItem = ({ item, index, sectionColors }) => {
    const backgroundColor = item.id === selectedId ? '#6a11cb' : sectionColors[index % sectionColors.length];
    const textColor = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* Morning Section */}
        <Text style={styles.sectionHeader}>Morning</Text>
        <FlatList
          data={morning}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: morningColors })}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

        {/* Afternoon Section */}
        <Text style={styles.sectionHeader}>Afternoon</Text>
        <FlatList
          data={afternoon}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: afternoonColors })}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />

        {/* Evening Section */}
        <Text style={styles.sectionHeader}>Evening</Text>
        <FlatList
          data={evening}
          renderItem={({ item, index }) => renderItem({ item, index, sectionColors: eveningColors })}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
  },
  item: {
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;