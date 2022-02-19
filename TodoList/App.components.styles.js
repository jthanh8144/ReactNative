import { StyleSheet } from "react-native";

import colors from './contains/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    body: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 18,
    },
    header: {
        fontSize: 24,
        color: colors.primary,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default styles;
