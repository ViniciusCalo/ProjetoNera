
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ClassroomCard from '../../components/teacher/ClassroomCard';
import TrailCard from '../../components/teacher/TrailCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setItems } from '../store/classroomSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    //Pergar as salas do professor na api rota quando chegar nessa tela `${process.env.EXPO_PUBLIC_API_NERA_URL}/classrooms/teacher`

    useEffect(() => {
        const getItems = async () => {
            AsyncStorage.getItem('token').then((value) => {
                setToken(value);
            });
            try {
                const res = await axios.get(`${process.env.EXPO_PUBLIC_API_NERA_URL}/classrooms/teacher`, {

                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(res.data);
                dispatch(setItems(res.data));
            } catch (error) {
                console.log(error);
            }
        };
        getItems();
    }, [token]);

    const { name } = useSelector((state) => state.user);
    const { items } = useSelector((state) => state.classrooms);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <View style={styles.panner}>
                <Text style={styles.texto}>🎉 Bem-vindo(a), Professor(a) {name}! 📚</Text>
                <Text style={styles.texto}>Pronto(a) para mostrar quanto a matemática é divertida através do N.E.R.A? 🚀✨</Text>

            </View>
            <View style={styles.salas}>
                <Text style={styles.title}>Minhas salas</Text>
                <ScrollView horizontal={true} >
                    <FlatList
                        style={{ width: '100%' }}
                        data={items}
                        keyExtractor={(item) => item.classroomid.toString()}
                        renderItem={({ item }) => (
                            <ClassroomCard
                                titulo={item.classroomname}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
            <View style={styles.trilhas}>
                <Text style={styles.title}>Trilhas</Text>
                <ScrollView horizontal={true}>
                    <FlatList
                        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TrailCard
                                value={item.id}
                            />
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </ScrollView>
            </View>
            <BottomMenuTeacher />
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
        marginBottom: '5%',
    },
    panner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: '5%',
    },
    title: {
        width: '90%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    texto: {
        width: '90%',
        textAlign: 'Center',
        fontSize: 16,
        fontWeight: 'Regular',
        color: '#000',
        marginTop: 5,
    },
    salas: {
        display: 'flex',
        width: '90%',
        height: '30%',
        borderRadius: 10,
        marginBottom: '5%',
    },
    trilhas: {
        display: 'flex',
        width: '90%',
        height: '20%',
        borderRadius: 10,
        marginBottom: '5%',
    },
});


export default Home;
