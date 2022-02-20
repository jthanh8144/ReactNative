import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { useState } from 'react';

import styles from './App.components.styles';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList(prev => [...prev, task]);
  }

  const handleDelTask = (index) => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa công việc này không?',
      [
        {
          text: 'Hủy',
          onPress: () => {},
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index, 1);
            setTaskList(taskListTmp);
          },
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.listItems}>
          {
            taskList.map((item, index) => (
              <Task 
                key={index} 
                index={index + 1} 
                content={item}
                onDelTask={() => handleDelTask(index)}
              />
            ))
          }
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
      <StatusBar style="auto" />
    </View>
  );
}
