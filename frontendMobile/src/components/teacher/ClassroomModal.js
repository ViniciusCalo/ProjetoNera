import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import seta from '../../assets/seta.png';
import classIcon from '../../assets/classPink.png';
import share from '../../assets/share.png';
import copy from '../../assets/copy.png';
import studentIcon from '../../assets/studentIcon.png';
//import Clipboard
import * as Clipboard from 'expo-clipboard';
import TrailCard from './TrailCard';
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation


const ClassroomModal = ({ classroom, modalVisible, setModalVisible }) => {
    const navigation = useNavigation();

    // Função para copiar o código da sala para a área de transferência
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(classroom.tokenclass);
        alert('Código Copiado!');
    };

    const goToTeacherClassroom = () => {
        navigation.navigate('TeacherClassroom');
        setModalVisible(!modalVisible);
    };

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={styles.button}
                            onPress={goToTeacherClassroom}
                        >
                            <Image source={seta} style={styles.seta} />
                        </Pressable>
                        <View style={styles.div1}>
                            <View>
                                <Image source={classIcon} style={styles.image} />
                            </View>
                            <View style={styles.div2}>
                                <Text style={styles.title}>{classroom.classroomname}</Text>
                                <View style={styles.students}>
                                    <Text style={styles.titleS}>{classroom.tokenclass}</Text>
                                    <Pressable onPress={copyToClipboard} style={styles.icones}>
                                        <Image source={copy} style={styles.copy} />
                                    </Pressable>
                                    <Pressable style={styles.icones} >
                                        <Image source={share} style={styles.share} />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.subtitulo}>Descrição</Text>
                        <Text>{classroom.classroomdescription}</Text>
                        <Text style={styles.subtitulo}>Trilha da Sala</Text>
                        <TrailCard
                            trail={classroom.trackid}
                            module={classroom.moduleid}
                        />
                        <Text style={styles.subtitulo}>Alunos</Text>
                        <View style={styles.div3}>
                            <View>
                                <Text style={styles.textAluno}>1  Aluno</Text>
                                <Text style={styles.textAluno}>2  Aluno</Text>
                                <Text style={styles.textAluno}>3  Aluno</Text>
                                <Text style={styles.textAluno}>4  Aluno</Text>
                                <Text style={styles.textAluno}>5  Aluno</Text>
                                <Text style={styles.textAluno}>6  Aluno</Text>
                            </View>
                            <View>
                                <Image source={studentIcon} style={styles.icon2} />
                                <Image source={studentIcon} style={styles.icon2} />
                                <Image source={studentIcon} style={styles.icon2} />
                                <Image source={studentIcon} style={styles.icon2} />
                                <Image source={studentIcon} style={styles.icon2} />
                                <Image source={studentIcon} style={styles.icon2} />
                            </View>
                        </View>

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
    div3: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
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
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        position: 'absolute',
        top: 0,
        left: 0
    },
    seta: {
        padding: 10,
        width: 30,
        height: 20,
    },
    icones: {
        width: '30%',
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
        justifyContent: 'space-around',
        backgroundColor: '#F6F7FF',
        borderRadius: 8,
    },
    titleS: {
        fontSize: 12,
        marginLeft: 5,
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