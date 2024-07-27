import { useState } from 'react';
import { Button, Image, View, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import icon1 from '../../assets/addImg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PerfilTeacher = () => {
    const [image, setImage] = useState(null);

    AsyncStorage.getItem('image').then((value) => {
        setImage(value);
    });

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('image', value)
        } catch (e) {
          // saving error
        }
      };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            storeData(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <HeaderTeacher
            image={image}
            />
            </View>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.infoPerfil}>
                <View style={styles.image}>
                    {image && <Image source={{ uri: image }} style={styles.img} />}
                    <Pressable onPress={pickImage} style={styles.btnfoto}>
                        <Image source={icon1} style={styles.icon} />
                    </Pressable>
                </View>
                <Text style={styles.texto}>Nome </Text>
            </View>
            <View style={styles.infoText}>
                <Text style={styles.texto}>Notificações</Text>

            </View>

            <BottomMenuTeacher />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F6F7FF',
    },
    header: {
        display: 'flex',
        width: '100%',
        height: '15%',
        marginBottom: '2%',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '5%',
    },
    infoText: {
        marginTop: '5%',
        display: 'flex',
        width: '90%',
        height: '50%',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    texto: {
        width: '90%',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: '5%',
        marginBottom: '2%',
    },
    infoPerfil: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        width: '90%',
        height: '10%',
    },
    image: {
        marginTop: '2%',
        marginLeft: '5%',
        marginRight: '5%',
        width: "20%",
        height: "80%",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#135794',
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    btnfoto: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '40%',
        height: '40%',
        backgroundColor: '#135794',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    icon: {
        width: '50%',
        height: '50%',
    },
});

export default PerfilTeacher;
