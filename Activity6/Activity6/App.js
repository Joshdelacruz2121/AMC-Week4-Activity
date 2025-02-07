import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';


const initialMorningTasks = [
  { id: 'todo1', title: '1. Wake-up', completed: false },
  { id: 'todo2', title: '2. Shower & Eat', completed: false },
  { id: 'todo3', title: '3. Prepare clothes for school', completed: false },
  { id: 'todo4', title: '4. Lunch', completed: false },
  { id: 'todo5', title: '5. Go to school', completed: false },
];

const initialAfternoonTasks = [
  { id: 'todo6', title: '6. Take a shower', completed: false },
  { id: 'todo7', title: '7. Sleep', completed: false },
  { id: 'todo8', title: '8. Prepare Anything', completed: false },
  { id: 'todo9', title: '9. Get to work', completed: false },
  { id: 'todo10', title: '10. Prepare clothes for school tomorrow', completed: false },
];

const initialEveningTasks = [
  { id: 'todo11', title: '11. Take a shower', completed: false },
  { id: 'todo12', title: '12. Prepare clothes', completed: false },
  { id: 'todo13', title: '13. Go to bed', completed: false },
  { id: 'todo14', title: '14. Use Phone', completed: false },
  { id: 'todo15', title: '15. Sleep', completed: false },
];


const Item = ({ item, onPress, onLongPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor, textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
      {item.title}
    </Text>
  </TouchableOpacity>
);

const App = () => {
  const [morningTasks, setMorningTasks] = useState(initialMorningTasks);
  const [afternoonTasks, setAfternoonTasks] = useState(initialAfternoonTasks);
  const [eveningTasks, setEveningTasks] = useState(initialEveningTasks);
  const [newTask, setNewTask] = useState('');
  const [selectedSection, setSelectedSection] = useState('morning');

  const toggleTaskCompletion = (section, id) => {
    const updateTasks = (tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );

    if (section === 'morning') {
      setMorningTasks(updateTasks(morningTasks));
    } else if (section === 'afternoon') {
      setAfternoonTasks(updateTasks(afternoonTasks));
    } else if (section === 'evening') {
      setEveningTasks(updateTasks(eveningTasks));
    }
  };

  
  const addTask = () => {
    if (newTask.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty!');
      return;
    }

    const newTaskItem = {
      id: `todo${Math.random().toString(36).substr(2, 9)}`,
      title: newTask,
      completed: false,
    };

    if (selectedSection === 'morning') {
      setMorningTasks([...morningTasks, newTaskItem]);
    } else if (selectedSection === 'afternoon') {
      setAfternoonTasks([...afternoonTasks, newTaskItem]);
    } else if (selectedSection === 'evening') {
      setEveningTasks([...eveningTasks, newTaskItem]);
    }

    setNewTask(''); 
  };

  
  const deleteTask = (section, id) => {
    const filterTasks = (tasks) => tasks.filter((task) => task.id !== id);

    if (section === 'morning') {
      setMorningTasks(filterTasks(morningTasks));
    } else if (section === 'afternoon') {
      setAfternoonTasks(filterTasks(afternoonTasks));
    } else if (section === 'evening') {
      setEveningTasks(filterTasks(eveningTasks));
    }
  };

  const renderItem = ({ item, section }) => {
    const backgroundColor = item.completed ? '#6a11cb' : '#f0f0f0';
    const textColor = item.completed ? 'white' : 'red';

    return (
      <Item
        item={item}
        onPress={() => toggleTaskCompletion(section, item.id)}
        onLongPress={() => deleteTask(section, item.id)}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            value={newTask}
            onChangeText={setNewTask}
          />
          <Button title="Add Task" onPress={addTask} />
        </View>

        <View style={styles.sectionSelector}>
          <Button title="Morning" onPress={() => setSelectedSection('morning')} />
          <Button title="Afternoon" onPress={() => setSelectedSection('afternoon')} />
          <Button title="Evening" onPress={() => setSelectedSection('evening')} />
        </View>

        <FlatList
          data={
            selectedSection === 'morning'
              ? morningTasks
              : selectedSection === 'afternoon'
              ? afternoonTasks
              : eveningTasks
          }
          renderItem={({ item }) => renderItem({ item, section: selectedSection })}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sectionSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
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