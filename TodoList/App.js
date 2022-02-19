import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import styles from './App.components.styles';
import Task from './components/Task';
import Form from './components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.listItems}>
          <Task />
        </ScrollView>
      </View>
      <Form />
      <StatusBar style="auto" />
    </View>
  );
}
