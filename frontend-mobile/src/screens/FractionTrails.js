import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import BottomMenuStudent from '../components/MenuStudent';
import colors from '../components/styles';
import ButtonModules from '../components/ButtonModules';

const FractionTrails = ({navigation}) => {
    const handleAccessModulePress = () => {
        navigation.navigate('FractionScreen');
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.header} >
                    <Image source={require('../assets/fracao.png')} style={styles.img} />
                    <Text style={styles.text}>Frações</Text>
                </View>
                <View style={styles.grid}>
                    <ButtonModules onPress={handleAccessModulePress} color={colors.rosa} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <ButtonModules color={colors.rosa} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <ButtonModules color={colors.rosa} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <ButtonModules color={colors.rosa} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                    <View style={styles.curvedDash} />
                </View>
            </ScrollView>
            <BottomMenuStudent />
        </View>
    )
}


export default FractionTrails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.branco,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    header: {
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
        textAlign: 'center'
    },
    scrollView: {
        width: '100%',
    },
    grid: {
        flexDirection: 'column',
        justifyContent: 'between',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 50,
    },
    dash: {
        width: 1,
        height: '5%',
        backgroundColor: colors.rosa,
        marginHorizontal: 10,
        marginVertical: 5,
    },
    curvedDash: {
        width: 5,
        height: 20,
        borderRadius: 5,
        backgroundColor: colors.rosa,
        marginHorizontal: 10,
        marginVertical: 5,
    },
})
