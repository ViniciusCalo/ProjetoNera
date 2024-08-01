import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuStudent from '../../components/MenuStudent';
import ClassroomCard from '../../components/teacher/ClassroomCard';

const StudentClassroom = () => {

    const imageUrls = [
        { id: 1, url: require('../../assets/classBlue.png'), label: '6 ano C' },
        { id: 2, url: require('../../assets/classPink.png'), label: '7 ano B' },
        { id: 3, url: require('../../assets/classYellow.png'), label: '6 ano B' },
        { id: 4, url: require('../../assets/classAqua.png'), label: '7 ano A' },
        { id: 5, url: require('../../assets/classBlue.png'), label: '6 ano A' },
        { id: 6, url: require('../../assets/classYellow.png'), label: '7 ano C' },
        { id: 7, url: require('../../assets/classYellow.png'), label: '7 ano C' },
        { id: 8, url: require('../../assets/classYellow.png'), label: '7 ano C' },
        { id: 9, url: require('../../assets/classYellow.png'), label: '7 ano C' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <Text style={styles.titleContainerMyClassroom}>Minhas salas</Text>
            <FlatList
                style={styles.flatList}
                data={imageUrls}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.classroomCardContainer}>
                        <ClassroomCard label={item.label} />
                    </View>
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
            <BottomMenuStudent />
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
        height: '12%',
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

export default StudentClassroom;
