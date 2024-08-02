import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from "react-native";
import BottomMenuStudent from '../../components/MenuStudent';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import ButtonBlue from '../../components/ButtonBlue';
import ClassroomModal from '../../components/student/ClassroomModal';

const JoinClassroom = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>

            <View style={styles.content}>
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

            <BottomMenuStudent />

            {/* Componente do modal */}
            <ClassroomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                classroom={{}} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7FF',
    },
    header: {
        width: '100%',
        height: '12%',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#6296C4',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    bottomMenu: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
});

export default JoinClassroom;
