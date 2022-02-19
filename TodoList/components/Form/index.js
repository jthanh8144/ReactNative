import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './styles';

const Form = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : 'height'}
            keyboardVerticalOffset={10}
            style={styles.form}
        >
            <TextInput
                placeholder='Thêm công việc...'
                style={styles.input}
            />
            <TouchableOpacity style={styles.btnAdd}>
                <Text style={styles.btnAddIcon}>+</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default Form;