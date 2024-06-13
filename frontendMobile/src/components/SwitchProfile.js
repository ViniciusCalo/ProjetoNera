import React from 'react';
import { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';

const SwitchProfile = ({ width, height }) => {

    const [flexDirection, setflexDirection] = useState("row");
    const [typeUser, setTypeUser] = useState("Aluno");
    const [value, setValue] = useState(0);

    const toggleValue = () => {
        setValue(prevValue => (prevValue === 0 ? 1 : 0));
        changeDirection()
    };

    const changeDirection = () => {
        if (value == 1) {
            setflexDirection("row-reverse")
            setTypeUser("Professor")
        } else {
            setflexDirection("row")
            setTypeUser("Aluno")
        }
    };
    return (
        <View style={[styles.viewSwitch, { width: width, height: height, flexDirection: flexDirection }]}>
            <Pressable
                style={styles.Switch}
                onPress={toggleValue}
            >
                <Text style={styles.switchText}>{typeUser}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    viewSwitch: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#BBBBBB',
        borderRadius: 18,
    },
    Switch: {
        width: '55%',
        height: '100%',
        backgroundColor: '#135794',
        borderWidth: 6,
        borderColor: '#0F406B',
        borderRadius: 17,
        justifyContent:'center',
        alignItems:'center',
    },
    switchText: {
        fontSize: 16,
        fontWeight:'bold',
        color: 'white'
    }
});

export default SwitchProfile;
