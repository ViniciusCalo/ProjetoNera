import { useState } from 'react';
import { Image, View, StyleSheet, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuStudent from '../../components/MenuStudent';
import icon1 from '../../assets/addImg.png';
import * as FileSystem from 'expo-file-system';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Buffer } from 'buffer';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setName, setProfileImageUrl } from '../store/userSlice';


const PerfilTeacher = () => {
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const { name, profileImageUrl } = useSelector((state) => state.user);

    // Pegando o token do usuário
    AsyncStorage.getItem('token').then((value) => {
        setToken(value);
    });

    // Função para atualizar imagem do user do redux utilizando api
    const updateProfile = async (uriImagem) => {
        try {
            const res = await axios.put(`${process.env.API_NERA_URL}/users/uploadpic`, {
                profilepicture: uriImagem
            },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
            console.log(res.data);
            dispatch(setProfileImageUrl(uriImagem));
        } catch (err) {
            console.log(err);
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            console.log(uri);
            const userUri = await uploadImage(uri);
            console.info("Setando imagem" + userUri);
            //dispatch(setProfileImageUrl(userUri));
            await updateProfile(userUri);
        }
    };

    const uploadImage = async (uri) => {
        console.log('Uploading image');
        const imageUri = uri;

        // Substitua pela sua URL base da conta de armazenamento e o token SAS
        const baseUrl = process.env.AZURE_STORAGE_URL;
        const sasToken = process.env.SAS_TOKEN;


        try {
            const extension = imageUri.split('.').pop();
            const mimeType = "image/" + extension;

            // Gera um novo nome para o arquivo
            const fileId = uuidv4() || 'invalid-file-id';
            const newFileName = fileId + '.' + extension;
            console.log("info: " + newFileName);
            const signedUrl = `${baseUrl}/${newFileName}?${sasToken}`;


            // const fileStats = await RNFS.stat(imageUri);
            const fileContent = await FileSystem.readAsStringAsync(imageUri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            console.log("info" + fileContent);

            const options = {
                headers: {
                    'Content-Type': mimeType,
                    'x-ms-blob-type': 'BlockBlob',
                },
            };

            const response = await axios.put(signedUrl, Buffer.from(fileContent, 'base64'), options);

            if (response.status === 201) {
                console.log('Success Image uploaded successfully');
            } else {
                console.log('Error Image upload failed');
            }
            return signedUrl;
        } catch (err) {
            console.log('Error Unknown error: ' + err.message);
            setError(JSON.stringify(err));
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <Text style={styles.title}>Perfil</Text>
            <View style={styles.infoPerfil}>
                <View style={styles.image}>
                    <Image source={{ uri: profileImageUrl }} style={styles.img} />
                    <Pressable onPress={pickImage} style={styles.btnfoto}>
                        <Image source={icon1} style={styles.icon} />
                    </Pressable>
                </View>
                <Text style={styles.texto}>{name} </Text>
            </View>
            <View style={styles.infoText}>
                <Text style={styles.texto}>Notificações</Text>
                <Text style={styles.texto}>{error}</Text>

            </View>

            <BottomMenuStudent />
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
