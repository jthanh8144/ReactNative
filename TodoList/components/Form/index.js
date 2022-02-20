import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

import styles from './styles';

const Form = (props) => {
    const [task, setTask] = useState('');
    const handleAddTask = () => {
        if (task.length == 0) {
            alert('Vui lòng nhập công việc!');
            return false;
        }
        props.onAddTask(task);
        setTask('');
        Keyboard.dismiss();
        return true;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : 'height'}
            keyboardVerticalOffset={10}
            style={styles.form}
        >
            <TextInput
                placeholder='Thêm công việc...'
                style={styles.input}
                onChangeText={(text) => setTask(text)}
                value={task}
            />
            <TouchableOpacity
                onPress={handleAddTask}
                style={styles.btnAdd}
            >
                <Text style={styles.btnAddIcon}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form;
