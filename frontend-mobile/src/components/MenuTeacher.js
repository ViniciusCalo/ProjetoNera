import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import profileIcon from '../assets/profileIcon.png';
import classroomIcon from '../assets/classroomIcon.png'; 
import homeIcon from '../assets/home.png'; 

const BottomMenuTeacher = () => {
    const navigation = useNavigation();

    const goToTeacherProfile = () => {
        navigation.navigate('TeacherProfile');
    };

    const goToTeacherClassroom = () => {
        navigation.navigate('TeacherClassroom');
    };

    const goToHomeTeacher = () => {
        navigation.navigate('HomeTeacher');
    };

    const getIconStyle = (routeName) => {
        return {
            ...styles.icon,
            tintColor: navigation.getState().routes[navigation.getState().index].name === routeName ? '#F20574' : '#135794',
        };
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goToHomeTeacher}>
                <Image source={homeIcon} style={getIconStyle('HomeTeacher')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherClassroom}>
                <Image source={classroomIcon} style={getIconStyle('TeacherClassroom')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherProfile}>
                <Image source={profileIcon} style={getIconStyle('TeacherProfile')} />
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
        position: 'absolute',
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

export default BottomMenuTeacher;
