import { StyleSheet } from "react-native";

import colors from '../../contains/colors';

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        marginBottom: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemIndex: {
        backgroundColor: colors.second,
        color: colors.white,
        fontSize: 16,
        fontWeight: '700',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,

    },
    itemContent: {
        width: '80%',
        fontSize: 16,
    },
});

export default styles;
