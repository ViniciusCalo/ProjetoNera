import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CircleConquist from '../../components/CircleConquist';
import BottomMenuStudent from '../../components/MenuStudent';
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importe o hook useNavigation e useRoute

const StudentProfile = () => {

    const { profileImageUrl, name } = useSelector((state) => state.user);
    const navigation = useNavigation();
    return (
        <View style={styles.div_main}>
            <View style={styles.div_perfil}>
                <View style={styles.defaultView}>
                    <TouchableOpacity style={{ width: '70%', height: '70%' }} onPress={() => navigation.navigate('StudentEditProfile')}>
                        <Image source={{ uri: profileImageUrl }} resizeMode="contain" style={{ width: '100%', height: '100%' }}></Image>
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
        display: "flex",
        flexDirection: "row",
        height: '20%',
        width: '100%',
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
        height: '100%',
    }


})

export default StudentProfile;