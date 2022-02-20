import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles';

const Task = (props) => {
    const itemBgr = props.index % 2 === 0 ? styles.itemIndexEven : styles.itemIndexOdd;

    return (
        <TouchableOpacity
            onPress={props.onDelTask}
        >
            <View style={styles.item}>
                <Text style={[styles.itemIndex, itemBgr]}>
                    {props.index < 10 ? '0' + props.index : props.index}
                </Text>
                <Text style={styles.itemContent}>
                    {props.content}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Task;
