import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CircleConquist from '../../components/CircleConquist';
import BottomMenuStudent from '../../components/MenuStudent';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../store/classroomSlice';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importe o hook useNavigation e useRoute

const StudentProfile = () => {
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const { profileImageUrl, name } = useSelector((state) => state.user);
    const navigation = useNavigation();


    //Pergar as salas do professor na api rota quando chegar nessa tela `${process.env.EXPO_PUBLIC_API_NERA_URL}/classrooms/teacher`

    useEffect(() => {
        const getItems = async () => {
            AsyncStorage.getItem('token').then((value) => {
                setToken(value);
            });
            try {
                const res = await axios.get(`${process.env.EXPO_PUBLIC_API_NERA_URL}/student/classrooms`, {

                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log(res.data.classrooms);
                dispatch(setItems(res.data.classrooms));
            } catch (error) {
                console.log(error);
            }
        };
        getItems();
    }, [token]);

    return (
        <View style={styles.div_main}>
            <View style={styles.div_perfil}>
                <View style={styles.defaultView}>
                    <TouchableOpacity style={styles.profileImageContainer } onPress={() => navigation.navigate('StudentEditProfile')}>
                        <Image
                            source={profileImageUrl ? { uri: profileImageUrl } : require('../../assets/defaultProfileIcon.png')}
                            style={styles.profileImage}
                        />

                    </TouchableOpacity>
                </View>
                <View style={styles.defaultView}>
                    <Text style={[{ fontWeight: 'bold', fontSize: 15 }]}>{name}</Text>
                </View>
                <View style={styles.defaultView}>
                    <Image source={require('../../assets/icone.png')} resizeMode="contain" style={[styles.img_icone, { width: '50%', height: '50%' }]}></Image>
                </View>
            </View>

            <View style={styles.div_conquistas}>
                <View style={styles.view_txt_conquista}>
                    <Text style={{ fontSize: 23 }}>Conquista</Text>
                </View>
                <ScrollView style={styles.scrView_carrouselConqs} horizontal={true}>

                    <CircleConquist img={require('../../assets/exp_fracao.png')} txt={"Explorador de frações"}></CircleConquist>
                    <CircleConquist img={require('../../assets/camp_deno.png')} txt={"Campeão do Denominador"}></CircleConquist>
                    <CircleConquist img={require('../../assets/estrela_frac.png')} txt={"Estrela fracionária"}></CircleConquist>

                </ScrollView>
            </View>

            <View style={styles.div_estatisticas}>

                <View style={[{ width: '100%' }, { height: '14%' }, { alignItems: 'center' }]}>
                    <Text style={[{ fontSize: 20 }, { fontWeight: 'bold' }]}>Estatistica do Perfil</Text>
                </View>

                <View style={[{ width: '100%' }, { height: '43%' }, { display: 'flex' }, { flexDirection: 'row' }, { alignItems: 'center' }, { padding: 10 }, { gap: 10 }]}>


                    <View style={[{ width: '48%' }, { height: '90%' }, { borderRadius: 25 }, { borderColor: '#F29F05' }, { borderWidth: 3 }]}>

                    </View>
                    <View style={[{ width: '48%' }, { height: '90%' }, { borderRadius: 25 }, { borderColor: '#F29F05' }, { borderWidth: 3 }]}>

                    </View>

                </View>

                <View style={[{ width: '100%' }, { height: '43%' }, { display: 'flex' }, { flexDirection: 'row' }, { alignItems: 'center' }, { padding: 10 }, { gap: 10 }]}>


                    <View style={[{ width: '48%' }, { height: '90%' }, { borderRadius: 25 }, { borderColor: '#F29F05' }, { borderWidth: 3 }]}>

                    </View>
                    <View style={[{ width: '48%' }, { height: '90%' }, { borderRadius: 25 }, { borderColor: '#F29F05' }, { borderWidth: 3 }]}>

                    </View>




                </View>

            </View>

            <BottomMenuStudent />
        </View>
    )
}

const styles = StyleSheet.create({
    div_main: {
        display: "flex",
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    div_perfil: {
        alignItems: 'center',
        justifyContent: 'center',
        display: "flex",
        flexDirection: "row",
        height: '20%',
        width: '100%',
        marginTop: "5%",
        gap: 10,
        paddingLeft: 30,

    },

    img_icone: {
        width: '40%',
        height: '40%'
    },



    div_conquistas: {
        width: '100%',
        height: '35%',
    },

    div_estatisticas: {
        width: '100%',
        height: '35%',
        backgroundColor: 'white'
    },

    view_txt_conquista: {
        alignItems: 'center',
        width: '100%',
        height: '15%',
    },

    scrView_carrouselConqs: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
    },

    defaultView: {
        flex: 1,
        justifyContent: "center",
        height: '80%',
    },
    profileImageContainer: {
        width: '70%',
        height: '70%',
        borderRadius: 50, // Deixe a imagem circular
        overflow: 'hidden', // Garante que a sombra não se sobreponha à imagem
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // Sombra no Android
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 50, // Deixe a imagem circular
    },


})

export default StudentProfile;