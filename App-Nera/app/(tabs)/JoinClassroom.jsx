import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import BottomMenuStudent from '../../components/MenuStudent';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import ButtonBlue from '../../components/ButtonBlue';
import ClassroomModal from '../../components/student/ClassroomModal';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/classroomSlice';

const JoinClassroom = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [tokenclassr, setTokenClass] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [classroom, setClassroom] = useState([{}]);

    // Pegando o token do usuário
    AsyncStorage.getItem('token').then((value) => {
        setToken(value);
    });

        // Clear form function
        const clearForm = () => {
            setTokenClass('');
        };

    // Função para entrar na sala utilizando api  metodo put /student/joinClassroom
    const joinClass = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${process.env.EXPO_PUBLIC_API_NERA_URL}/student/joinClassroom`, {
                tokenclass: tokenclassr

            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setClassroom(res.data.result);
            console.log(res.data.message);
            console.log(classroom);
            setModalVisible(true);
            dispatch(addItem(res.data.result));
            clearForm
        } catch (error) {
            // Captura o erro e exibe a mensagem
            const err = error.response.data;
            console.error(err);
        }
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
                        placeholderTextColor='#6296C4'
                        value={tokenclassr}
                        onChangeText={(text) => setTokenClass(text)}
                    />
                    <ButtonBlue
                        onPress={joinClass}
                        title="Entrar"
                    />
                </View>
                {isViewVisible && (
                    <BottomMenuStudent />
                )}
                <ClassroomModal
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    classroom={classroom}
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
