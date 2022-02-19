import { StyleSheet } from "react-native";

import colors from '../../contains/colors';

const styles = StyleSheet.create({
    form: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: colors.text,
    },
    btnAdd: {
        width: 44,
        height: 44,
        backgroundColor: colors.primary,
        borderRadius: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.background,
    },
    btnAddIcon: {
        fontSize: 24,
        color: colors.white,
    }
});

export default styles;
