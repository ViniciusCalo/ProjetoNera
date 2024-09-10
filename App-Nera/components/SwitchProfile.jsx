import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

const SwitchProfile = ({ width, height, onpress, value }) => {
    const [flexDirection, setflexDirection] = useState("row");

    useEffect(() => {
        if (value === 'teacher') {
            setflexDirection("row-reverse");
        } else {
            setflexDirection("row");
        }
    }, [value]);

    return (
        <View style={[styles.viewSwitch, { width: width, height: height, flexDirection: flexDirection }]}>
            <Pressable
                style={styles.Switch}
                onPress={onpress}
            >
                <Text style={styles.switchText}>
                    {value === 'teacher' ? 'Professor' : 'Aluno'}
                </Text>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default SwitchProfile;
