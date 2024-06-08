import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import profileIcon from '../assets/profileIcon.png'; 
import trail from '../assets/trail.png'; 

const BottomMenuStudent = () => {
    const navigation = useNavigation();

    const goToStudentProfile = () => {
        navigation.navigate('StudentProfile');
    };

    const goToStudentTrails = () => {
        navigation.navigate('StudentTrails');
    };

    const getIconStyle = (routeName) => {
        return {
            ...styles.icon,
            tintColor: navigation.getState().routes[navigation.getState().index].name === routeName ? '#F20574' : '#135794',
        };
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goToStudentTrails}>
                <Image source={trail} style={getIconStyle('StudentTrails')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToStudentProfile}>
                <Image source={profileIcon} style={getIconStyle('StudentProfile')} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 30,
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },

    button: {
        alignItems: 'center',
    },

    icon: {
        width: 32,
        height: 34,
        tintColor: '#135794',
    },
});

export default BottomMenuStudent;
