import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import IconNera from '../components/IconNera';
import BottomMenuTeacher from '../components/MenuTeacher';
import ButtonBlue from '../components/ButtonBlue';

const Home = ({ navigation }) => {
    const handleCreateClassPress = () => {
        navigation.navigate('CreateClass');
    };

    const imageUrls = [
        { id: 1, url: require('../assets/classBlue.png'), label: '6 ano C' },
        { id: 2, url: require('../assets/classPink.png'), label: '7 ano B' },
        { id: 3, url: require('../assets/classYellow.png'), label: '6 ano B' },
        { id: 4, url: require('../assets/classAqua.png'), label: '7 ano A' },
        { id: 5, url: require('../assets/classBlue.png'), label: '6 ano A' },
        { id: 6, url: require('../assets/classYellow.png'), label: '7 ano C' },
    ];

    return (
        <View style={styles.page}>
            <View style={styles.topIcon}>
                <IconNera />
            </View>

            <View style={styles.containerMyClassroom}>
                <Text style={styles.titleContainerMyClassroom}>Minhas salas</Text>
                <FlatList
                    data={imageUrls}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={item.url} />
                            <Text style={styles.imageLabel}>{item.label}</Text>
                        </View>
                    )}
                />
            </View>

            <View style={styles.containerCreateClassroom}>
                <ButtonBlue onPress={handleCreateClassPress} title="Criar nova sala" />
            </View>
            <BottomMenuTeacher />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F6F7FF',
    },
    topIcon: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    containerMyClassroom: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '35%',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    titleContainerMyClassroom: {
        fontSize: 25,
        top: '5%',
        fontWeight: '600',
    },
    containerCreateClassroom: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        position: 'absolute',
        top: 550,
        left: 35,
        right:5,
        transform: [{ translateX: 10 }],
        width: '80%',
        height: '10%',
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7,
    },
    image: {
        top: 22,
        width: 90,
        height: 85,
        resizeMode: 'cover',
    },
    imageLabel: {
        top: 22,
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Home;
