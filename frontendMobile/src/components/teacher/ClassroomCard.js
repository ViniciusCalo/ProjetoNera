import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import classIcon from '../../assets/classPink.png';
import fracaoIcon from '../../assets/fracao.png';
import studentIcon from '../../assets/studentIcon.png';


const ClassroomCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.polygon}>
            <Image source={fracaoIcon} style={styles.iconTrail} />
            </View>
            <Image source={classIcon} style={styles.image} />
            <Text style={styles.title}>Turma</Text>
            <View style={styles.students}>
                <Image source={studentIcon} style={styles.iconS} />
                <Text style={styles.titleS}> X Alunos</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: 152,
        height: 190,
        position: 'relative',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginTop: 50,
        marginBottom: 16,
        marginLeft: 10,
        marginRight: 10,
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
        position: 'absolute',
        right: 0,
        top: 0,
        width: 50,
        height: 50,
        paddingTop: 10,
        backgroundColor: '#F6F7FF',
        clipPath:
    "polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)",
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
    image: {
        width: 76.95,
        height: 72.97,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    students: {
        width: "90%",
        height: 28,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
});

export default ClassroomCard;