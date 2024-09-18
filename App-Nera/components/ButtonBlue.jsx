import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonBlue = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 140,
        height: 40,
        backgroundColor: '#135794',
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
    },
});

export default ButtonBlue;
