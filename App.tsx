import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

type Task = {
  id: number;
  name: string;
}

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([{ id: 1, name: 'walk the dog' }, { id: 2, name: 'go to the grym' }]);

  const handleOnPressAddTask = () => {
    const newTask = { id: tasks.length + 1, name: task };
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>To do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a task"
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleOnPressAddTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.listContainer}
        data={tasks}
        KeyExtractor={(item: Task) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.id}</Text>
              <Text style={styles.taskText}>{item.name}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#7e22ce',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
  taskItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  deleteText: {
    fontSize: 18,
    color: '#ef4444',
  },
});
