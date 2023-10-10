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
        width: '100%',
        flexDirection: 'row'
    },
    col: {
        1: {
            width: '25%'
        },
        2: {
            width: '50%',
        },
        3: {
            width: '75%',
        },
        4: {
            width: '100%',
        }
    },
    row: {
        1: {
            height: '25%'
        },
        2: {
            height: '50%',
        },
        3: {
            height: '75%',
        },
        4: {
            height: '100%',
        }
    }
})