import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';

const Task = () => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.itemIndex}>01</Text>
                <Text style={styles.itemContent}>Lau nhà</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task;