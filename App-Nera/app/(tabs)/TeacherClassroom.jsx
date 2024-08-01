import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ClassroomCard from '../../components/teacher/ClassroomCard';
import { useSelector } from 'react-redux';


const TeacherClassroom = () => {
    const { items } = useSelector((state) => state.classrooms);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <Text style={styles.titleContainerMyClassroom}>Minhas salas</Text>
            <FlatList
                style={styles.flatList}
                data={items}
                keyExtractor={(item) => item.classroomid.toString()}
                renderItem={({ item }) => (
                    <View style={styles.classroomCardContainer}>
                        <ClassroomCard label={item.classroomname} 
                        titulo={item.classroomname}
                        />
                    </View>
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
            <BottomMenuTeacher />
        </View>
    );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F6F7FF',
    },
    header: {
        width: '100%',
        height: '15%',
        marginBottom: '2%',
    },
    titleContainerMyClassroom: {
        fontSize: 25,
        marginVertical: 10,
        fontWeight: '600',
    },
    flatList: {
        width: '100%',
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    classroomCardContainer: {
        flex: 1,
        margin: 5,
        minWidth: (screenWidth / 2) - 20,
        maxWidth: (screenWidth / 2) - 20,
    },
});

export default TeacherClassroom;
