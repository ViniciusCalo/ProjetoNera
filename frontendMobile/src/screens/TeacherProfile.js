import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  BottomMenuTeacher from '../components/MenuTeacher'; // Importe o componente BottomMenu

const TeacherProfile = () => {
    return (
        <View style={styles.container}>
            <Text>Teacher Profile</Text>
            <BottomMenuTeacher />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default TeacherProfile;
