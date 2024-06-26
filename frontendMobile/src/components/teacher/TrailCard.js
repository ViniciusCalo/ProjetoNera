import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import fracaoIcon from '../../assets/fracao.png';



const TrailCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.polygon}>
            <Image source={fracaoIcon} style={styles.iconTrail} />
            </View>
            <Text style={styles.title}>Fração</Text>
            <Text style={styles.text}>10 Modulos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 152,
        height: 98,
        backgroundImage: 'linear-gradient(35deg, rgba(255,255,255,1) 64%, rgba(242,5,116,1) 85%, rgba(242,5,116,1) 99%)',
        borderRadius: 8,
        marginTop: 50,
        gap: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    polygon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -25,
        marginRight: -112,
        marginBottom: -20,
        width: 40,
        height: 40,
        borderRadius: 8,
        paddingTop: 10,
        backgroundColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
        
    },
    iconTrail: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 8,
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 14,
        color: '#A1A5AB',
    },
});

export default TrailCard;