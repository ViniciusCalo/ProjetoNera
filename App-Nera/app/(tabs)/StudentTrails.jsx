import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import colors from '../../components/styles';
import BottomMenuStudent from '../../components/MenuStudent';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';


const StudentTrails = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <View style={styles.divT}>
                <Text style={styles.titulo}>Trilhas</Text>
                <View style={styles.main}>
                    <ScrollView horizontal={true} style={{ display: 'flex', flexDirection: 'row'}}>
                        <View style={styles.trilha1}>
                            <Image source={require('../../assets/fracao.png')} style={styles.img} />
                            <Text style={styles.text}>Trilha de Frações</Text>
                        </View>
                        <View style={styles.trilha2}>
                            <Image source={require('../../assets/por.png')} style={styles.img} />
                            <Text style={styles.text}>Trilha de Porcentagem</Text>
                        </View>
                        <View style={styles.trilha3}>
                            <Image source={require('../../assets/geo.png')} style={styles.img} />
                            <Text style={styles.text}>Trilha de Geometria</Text>
                        </View>
                        <View style={styles.trilha4}>
                            <Image source={require('../../assets/matriz.png')} style={styles.img} />
                            <Text style={styles.text}>Trilha de matrizes</Text>
                        </View>
                        <View style={styles.trilha5}>
                            <Image source={require('../../assets/expre.png')} style={styles.img} />
                            <Text style={styles.text}>Trilha de Expressão</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <BottomMenuStudent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.branco,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: '12%',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
    },
    titulo: {
        position: 'absolute',
        left: '30%',
        color: colors.azulEscuro,
        fontSize: 30,
        margin: "5%",
        textAlign: 'center',
    },
    divT: {
        flex: 1,
        width: '100%',
        height: '80%',
    },
    text: {
        color: colors.azulEscuro,
        fontSize: 30,
        marginBottom: 20,
        marginTop: "10%",
    },
    img: {
        width: 203,
        height: 203,
        padding: 20,
    },
    main: {
        width: "100%",
        height: "100%",
    },
    trilha1: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.rosa}30`,
        width: '32%',

    },
    trilha2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.azulEscuro}30`,
        width: '32%',
    },
    trilha3: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.amarelo}30`,
        width: '32%',
    },
    trilha4: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.azulClaro}30`,
        width: '32%',
    },
    trilha5: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `${colors.amarelo}30`,
        width: '32%',
    },
});

export default StudentTrails;