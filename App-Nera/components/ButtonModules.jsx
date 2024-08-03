import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const ButtonModules = ({ color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
            {/* Add your button content here */}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonModules;