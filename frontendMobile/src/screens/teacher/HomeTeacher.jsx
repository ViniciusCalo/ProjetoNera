import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ClassroomCard from '../../components/teacher/ClassroomCard';
import TrailCard from '../../components/teacher/TrailCard';


const Home = () => { 


    return (
        <View style={styles.container}>
            <HeaderTeacher />
            <View style={styles.panner}>
            </View>
            <Text style={styles.title}>Minhas salas</Text>
            <ScrollView horizontal={true} style={{ width: "100%", height: "20%"}}>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                    keyExtractor={(item) => item.id.toString()}
                    style={{ paddingLeft: 20 }}
                    renderItem={({ item }) => (
                            <ClassroomCard/>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
            <Text style={styles.title}>Trilhas</Text>
            <ScrollView horizontal={true} style={{ width: "100%"}}>
                <FlatList
                    data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]}
                    keyExtractor={(item) => item.id.toString()}
                    style={{ paddingLeft: 20 }}
                    renderItem={({ item }) => (
                        <View style={{ height: 100, marginRight: 20 }}>
                            <TrailCard/> 
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>

            <BottomMenuTeacher />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: '#F6F7FF',
    },
    panner: {

        height: '20%',
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    title: {
        width: '90%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
});


export default Home;
