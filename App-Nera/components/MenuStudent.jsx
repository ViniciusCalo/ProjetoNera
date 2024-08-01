import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation
import trailIcon from '../assets/trail.png'; 
import classroomIcon from '../assets/classroomIcon.png'; 
import profileIcon from '../assets/profile.png'; 
import joinIcon from '../assets/entrar.png';
import reportIcon from '../assets/report.png';

const BottomMenuTeacher = () => {
    const navigation = useNavigation();

    const goToHomeTeacher = () => {
        navigation.navigate('HomeTeacher');
    };

    const goToTeacherTrial = () => {
        navigation.navigate('TeacherTrial');
    }
    const goToCreateClass = () => {
        navigation.navigate('CreateClass');
    }

    const goToTeacherClassroom = () => {
        navigation.navigate('TeacherClassroom');
    };

    const goToTeacherReport = () => {
        navigation.navigate('TeacherReport');
    }




    const getIconStyle = (routeName) => {
        return {
            ...styles.icon,
            tintColor: navigation.getState().routes[navigation.getState().index].name === routeName ? '#F20574' : '#135794',
        };
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={goToHomeTeacher}>
                <Image source={profileIcon} style={getIconStyle('HomeTeacher')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherTrial}>
                <Image source={trailIcon} style={getIconStyle('TeacherTrial')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonJoin} onPress={goToCreateClass}>
                <Image source={joinIcon} style={[getIconStyle('CreateClass'),styles.iconCreate]}  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherClassroom}>
                <Image source={classroomIcon} style={getIconStyle('TeacherClassroom')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={goToTeacherReport}>
                <Image source={reportIcon} style={getIconStyle('TeacherReport')} />
            </TouchableOpacity>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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
    iconCreate: {
        width: 60,
        height: 60,
    },
    buttonJoin: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        shadowColor: '#000',
        elevation: 5,
        position: 'relative',
    },
});

export default BottomMenuTeacher;
