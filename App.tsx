import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, TextInput} from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>📝 To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#999',
    borderWidth: 1,
    padding: 25,
    borderRadius: 6,
    color: '#000', // black te
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#3b82f6',
    padding: 10,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  taskItem: {
    backgroundColor: '#f3f4f6',
    padding: 15,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    fontSize: 18,
    color: '#ef4444',
  },
});
