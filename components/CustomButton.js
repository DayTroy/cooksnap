import { StyleSheet, TouchableOpacity, Text} from 'react-native';
import Color from '../assets/themes/Color';

const CustomButton = ({buttonText, style, onPress }) => {
    return (
        <TouchableOpacity 
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.Primary100,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 16,
        color: Color.White,
        fontWeight: 'bold',
        fontFamily: 'Poppins-SemiBold',
      },
})

export default CustomButton;