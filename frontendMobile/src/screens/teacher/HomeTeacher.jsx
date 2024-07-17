import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ClassroomCard from '../../components/teacher/ClassroomCard';
import TrailCard from '../../components/teacher/TrailCard';


const Home = () => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <View style={styles.panner}>
                
            </View>
            <View style={styles.salas}>
                <Text style={styles.title}>Minhas salas</Text>
                <ScrollView horizontal={true} >
                    <FlatList
                        style={{ width: '100%' }}
                        data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <ClassroomCard />
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
