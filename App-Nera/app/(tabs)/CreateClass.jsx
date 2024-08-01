import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import { RadioButton } from 'react-native-paper';
import ButtonBlue from '../../components/ButtonBlue';
import ClassroomModal from '../../components/teacher/ClassroomModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/classroomTeacherSlice';


const CreateClass = () => {
    const dispatch = useDispatch();
    const [classroom, setClassroom] = useState([{}]);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [module, selectedModule] = useState('');
    const [trail, selectedTrail] = useState('');
    const [token, setToken] = useState('');

    AsyncStorage.getItem('token').then((value) => {
        setToken(value);
    });

    const modules = [{ id: 1, modulo: 'Módulo 1' }, { id: 2, modulo: 'Módulo 2' }, { id: 3, modulo: 'Módulo 3' }];
    const trails = [{ id: 1, trilha: 'Fração' }, { id: 2, trilha: 'Porcentagem' }, { id: 3, trilha: 'Matrizes' }, { id: 4, trilha: 'Geometria' }, { id: 5, trilha: 'Expressão' }];

    // Clear form function
    const clearForm = () => {
        setTitle('');
        setDescription('');
        selectedModule('');
        selectedTrail('');
    };

    //atualizar as salas de aula do professor





    // Create a classroom function 
    const creatClassroom = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.EXPO_PUBLIC_API_NERA_URL}/classrooms/create/`, {
                classroomname: title,
                classroomdescription: description,
                trackid: trail,
                moduleid: module,

            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setClassroom(res.data.newClassroom);
            console.log(res.data.message);
            console.log(classroom);
            setModalVisible(true);
            dispatch(addItem(res.data.newClassroom));
            clearForm();
        } catch (error) {
            // Captura o erro e exibe a mensagem
            const err = error.response.data;
            if (err.message === 'Classroom already exists') {
                alert('O titulo da sala de aula já existe!');      
            } else {
                alert('Ocorreu um erro ao criar a sala de aula.');
            }
            console.error(err);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Criar sala</Text>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={text => setTitle(text)}
                    placeholder="Digite o título da Sala"
                    placeholderTextColor={"#6296C4"}
                />
                <Text style={styles.label} >Descrição</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    placeholder="Digite a descrição da Sala"
                    placeholderTextColor={"#6296C4"}
                />

                <Text style={styles.label}>Trilhas</Text>
                <RadioButton.Group
                    onValueChange={newValue => selectedTrail(newValue)}
                    value={trail}
                >
                    <FlatList
                        onValueChange={newValue => selectedTrail(newValue)}
                        value={trail}
                        data={trails}
                        numColumns={3}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.radioItem}>
                                <Text style={styles.radioButtonLabel}>{item.trilha}</Text>
                                <RadioButton
                                    uncheckedColor="#6296C4"
                                    color="#6296C4"
                                    value={item.id} />
                            </View>
                        )}
                    />
                </RadioButton.Group>
                <Text style={styles.label}>Módulos</Text>

                <Picker
                    style={styles.select}
                    selectedValue={module}
                    onValueChange={(itemValue) => selectedModule(itemValue)}
                    itemStyle={{ color: '#6296C4', height: 40, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                >
                    <Picker.Item
                        label="Selecione um Módulo" value="" />
                    {modules.map((item) => (
                        <Picker.Item key={item.id} label={item.modulo} value={item.id} />
                    ))}
                </Picker>
                <View style={styles.buttons}>
                    <ButtonBlue onPress={() => setModalVisible(!modalVisible)} title="Cancelar" />
                    <ButtonBlue onPress={creatClassroom} title="Criar Sala" />
                </View>
            </View>
            <BottomMenuTeacher />
            <ClassroomModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                classroom={classroom}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F6F7FF',
    },
    header: {
        display: 'flex',
        width: '100%',
        height: '15%',
        marginBottom: '2%',
    },
    form: {
        display: 'flex',
        width: '90%',
        height: '100%',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    label: {
        width: '90%',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: '5%',
        marginBottom: '2%',
    },
    input: {
        width: '100%',
        height: "5%",
        borderColor: '#6296C4',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    select: {
        position: 'relative',
        marginTop: '2%',
        width: '100%',
        height: "5%",
        borderColor: '#6296C4',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginBottom: '10%',
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '32%',
        margin: 2,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#6296C4',
        borderWidth: 1

    },
    icon: {
        width: 15,
        height: 15,
    },
    radioButtonLabel: {
        fontSize: 10,
        color: "#6296C4",
    },
    buttons: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});


export default CreateClass;