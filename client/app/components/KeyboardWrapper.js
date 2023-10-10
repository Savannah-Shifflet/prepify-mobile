import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from '../theme/styles';
export default function KeyboardWrapper ({children}) {
    return (
        <KeyboardAvoidingView style={{...styles.container, backgroundColor: '#27005D'}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView styles={styles.scrollContainer}>
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}