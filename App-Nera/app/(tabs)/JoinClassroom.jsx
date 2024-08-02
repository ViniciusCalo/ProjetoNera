import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import BottomMenuStudent from '../../components/MenuStudent';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import ButtonBlue from '../../components/ButtonBlue';
import ClassroomModal from '../../components/student/ClassroomModal';

const JoinClassroom = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const classrooms = {
        "newEnrollment": {
            "classroomid": 42,
            "studentid": 4
        },
        "classroomDetails": {
            "classroomname": "Sala fabi 3",
            "classroomdescription": "teste",
            "moduleid": 1,
            "trackid": 1
        },
        "teacherUsername": "Jose Santos"
    };

    const [isViewVisible, setIsViewVisible] = useState(true);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsViewVisible(false);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsViewVisible(true);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite o código da sala"
                    placeholderTextColor="#6296C4"
                />
                <ButtonBlue
                    onPress={() => setModalVisible(true)}
                    title="Entrar"
                />
            </View>
            {isViewVisible && (
            <BottomMenuStudent />
        )}
            <ClassroomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                classroom={classrooms}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FF',
        width: '100%',
        height: '100%',

    },
    header: {
        width: '100%',
        height: '12%',
    },
    form: {
        display: 'flex',
        marginTop: "50%",
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    input: {
        width: '70%',
        height: 50,
        borderColor: '#6296C4',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    }
});

export default JoinClassroom;
