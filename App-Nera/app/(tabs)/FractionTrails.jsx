import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import BottomMenuStudent from '../../components/MenuStudent';
import colors from '../../components/styles';
import ButtonModules from '../../components/ButtonModules';
import { useNavigation } from '@react-navigation/native';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';

const FractionTrails = () => {
    const navigation = useNavigation();
    const handleAccessModulePress = () => {
        navigation.navigate('FractionScreen');
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.titulo}>
                    <Image source={require('../../assets/fracao.png')} style={styles.img} />
                    <Text style={styles.text}>Frações</Text>
                </View>
                <View style={styles.grid}>
                    <View style={[styles.moduleContainer, styles.right]}>
                        <ButtonModules onPress={handleAccessModulePress} color={colors.rosa} />
                    </View>
                    <Svg height="100" width="100">
                        <Path
                            d="M15 -10 Q 25 25, 60 50 T 100 100"
                            stroke={colors.rosa}
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,5"
                        />
                    </Svg>
                    <View style={[styles.moduleContainer, styles.left]}>
                        <ButtonModules color={colors.rosa} />
                    </View>
                    <Svg height="100" width="100">
                        <Path
                            d="M100 0 Q 90 25, 60 50 T20 110"
                            stroke={colors.rosa}
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,5"
                        />
                    </Svg>
                    <View style={[styles.moduleContainer, styles.right]}>
                        <ButtonModules color={colors.rosa} />
                    </View>
                    <Svg height="100" width="100">
                        <Path
                             d="M15 -10 Q 25 25, 60 50 T 100 100"
                            stroke={colors.rosa}
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,5"
                        />
                    </Svg>
                    <View style={[styles.moduleContainer, styles.left]}>
                        <ButtonModules color={colors.rosa} />
                    </View>
                    <Svg height="100" width="100">
                        <Path
                            d="M100 0 Q 90 25, 60 50 T20 110"
                            stroke={colors.rosa}
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray="5,5"
                        />
                    </Svg>
                    <View style={[styles.moduleContainer, styles.right]}>
                        <ButtonModules color={colors.rosa} />
                    </View>
                </View>
            </ScrollView>
            <BottomMenuStudent />
        </View>
    );
};

export default FractionTrails;

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
        marginBottom: '2%',
    },
    titulo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    img: {
        width: 73,
        height: 73,
        marginRight: 20,
    },
    text: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    grid: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    moduleContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom:5,
    },
    left: {
        alignSelf: 'flex-start',
        marginLeft: 65,
    },
    right: {
        alignSelf: 'flex-end',
        marginRight: 35,
    },
});
