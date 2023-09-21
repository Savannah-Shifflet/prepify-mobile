import { StyleSheet, Dimensions } from "react-native";


export default styles = StyleSheet.create({
    scrollContainer: {
        flex: 1
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        padding: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        width: '100%',
        flexDirection: 'row',
    },
    col: {
        1: {
            width: '25%',
            backgroundColor: 'red'
        },
        2: {
            width: '50%',
            backgroundColor: 'red'
        },
        3: {
            width: '75%',
            backgroundColor: 'red'
        },
        4: {
            width: '100%',
            backgroundColor: 'red'
        }
    }
})