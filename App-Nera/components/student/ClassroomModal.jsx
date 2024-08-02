import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import seta from '../../assets/seta.png';
import classIcon from '../../assets/classPink.png';
import TrailCard from './TrailCard';
import { useNavigation } from '@react-navigation/native';
import ButtonBlue from '../../components/ButtonBlue';


const ClassroomModal = ({ classroom, modalVisible, setModalVisible }) => {
    const navigation = useNavigation();

    const goToStudentClassroom = () => {
        navigation.navigate('StudentClassroom');
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal foi fechado.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={styles.button}
                            onPress={goToStudentClassroom}
                        >
                            <Image source={seta} style={styles.seta} />
                        </Pressable>
                        <View style={styles.div1}>
                            <View>
                                <Image source={classIcon} style={styles.image} />
                            </View>
                            <View style={styles.div2}>
                                <Text style={styles.subtitulo}>{classroom.classroomDetails.classroomname}</Text>

                                <Text style={styles.titleS}>Professor: {classroom.teacherUsername}</Text>
                            </View>

                        </View>
                        <Text style={styles.subtitulo}>Descrição</Text>
                        <Text>{classroom.classroomDetails.classroomdescription}</Text>
                        <Text style={styles.subtitulo}>Trilha da Sala</Text>
                        <TrailCard
                            trail={classroom.classroomDetails.trackid}
                            module={classroom.classroomDetails.moduleid}
                        />
                        <ButtonBlue
                            onPress={() => setModalVisible(true)}
                            title="Entrar"
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        display: 'flex',
        width: '80%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    div1: {
        width: '93%',
        display: 'flex',
        flexDirection: 'row'
    },
    div2: {
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textAluno: {
        fontSize: 14,
        color: '#135794',
        marginBottom: '25%',
    },
    button: {
        width: 50,
        height: 60,
        padding: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 20,
        backgroundColor: '#fff',
    },
    seta: {
        padding: 10,
        width: 30,
        height: 20,
    },
    icones: {
        width: '30%',
        marginLeft: 0,
    },
    share: {
        padding: "20%",
        width: "20%",
        height: "20%",
    },
    copy: {
        padding: "20%",
        width: "20%",
        height: "20%",
    },
    title: {
        fontSize: 16,
        width: '100%',
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#F20574'
    },
    subtitulo: {
        width: '90%',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: '5%',
        marginBottom: '2%',
    },
    students: {
        display: 'flex',
        width: "90%",
        height: 28,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F7FF',
        borderRadius: 8,
    },
    titleS: {
        fontSize: 12,
        marginLeft: 5,
        marginRight: 5,
    },
    iconS:
    {
        width: 20,
        height: 20,
        marginBottom: 8,
    },
    icon2:
    {
        width: 20,
        height: 20,
        marginBottom: '45%',
    },
    image: {
        width: 66,
        height: 62,
    },
});


export default ClassroomModal;