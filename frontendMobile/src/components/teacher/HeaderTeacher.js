import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importe o hook useNavigation e useRoute
import imgProfile from '../../assets/ImgProfile.png';
import notificationIncon from '../../assets/notification.png';
import logoIcon from '../../assets/favicon.png';

const HeaderTeacher = () => {
    const navigation = useNavigation();
    const route = useRoute(); // Obtenha a rota atual usando o hook useRoute

    const goToTeacherProfile = () => {
        navigation.navigate('TeacherProfile');
    };

    const goToHomeTeacher = () => {
        navigation.navigate('HomeTeacher');
    };

    const goToTeacherNotification = () => {
        navigation.navigate('TeacherNotification');
    };

    // Verifique se a rota atual é a página inicial do professor
    const isHomeTeacher = route.name === 'HomeTeacher';

    return (
        <View style={isHomeTeacher ? styles.container : styles.container2}>
            {isHomeTeacher && (
                <TouchableOpacity style={styles.button} onPress={goToTeacherProfile}>
                    <Image source={imgProfile} style={styles.icon}  />
                </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={goToHomeTeacher}>
                <Image source={logoIcon} style={styles.icon} />
            </TouchableOpacity>
            {isHomeTeacher && (
                <TouchableOpacity style={styles.buttonCreate} onPress={goToTeacherNotification}>
                    <Image source={notificationIncon}style={styles.icon} />
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        paddingVertical: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    container2: {
        flex: 1,
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'white',
        paddingVertical: '5%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    icon: {
        width: 40,
        height: 40,
    },
});

export default HeaderTeacher;