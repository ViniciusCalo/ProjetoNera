import { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Pressable, TextInput, Keyboard, Dimensions} from "react-native";
import colors from '../components/styles';
import Switch from '../components/SwitchProfile';
import axios from 'axios';


const LoginScreen = ({ navigation }) => {


    const { width, height } = Dimensions.get('window');
    const [isViewVisible, setIsViewVisible] = useState(true);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsViewVisible(false);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsViewVisible(true);
        });

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [role, setRole] = useState('teacher');

    const toggleRole = () => {
      setRole(prevRole => (prevRole === 'teacher' ? 'student' : 'teacher'));
    };
    const stylesButtons = stylesButton(width);

    const criar = () => {
        navigation.replace('HomeTeacher')
    }

    const handleEntrar = () => {
        navigation.navigate('StudentProfile');
    };

    const login = async (e) => {
        e.preventDefault();
        try {
           const res = await axios.post("http://localhost:3333/users/login", {
                useremail: email,
                userpassword: senha,
                role: role
            });
            console.log(res.data.token)
            if (res.data.token || role === 'teacher') {
                localStorage.setItem('token', res.data.token);
                navigation.navigate('HomeTeacher');
            } else if (res.data.token || role === 'student') {
                localStorage.setItem('token', res.data.token);
                navigation.navigate('HomeStudent');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        //view principal
        <View style={stylesButtons.container}>
            <StatusBar style="" />
            {/*view img*/}
            <View style={stylesButtons.top}>
                <Image source={require('../assets/logoneraMinimizado.png')} style={stylesButtons.img} />
            </View>

            {/*view form*/}
            <View
                style={stylesButtons.div_form}
            >

                {/*view form formulario*/}
                <View
                    style={stylesForm.formulario}>
                    <Text
                        style={{ fontWeight: 'bold', color: 'white', fontSize: 25 }}>
                        Crie seu Perfil
                    </Text>

                    <TextInput
                        style={stylesForm.input_email}
                        placeholder='Email'
                        placeholderTextColor="#888888"
                        value={email}
                        onChangeText={(texto) => setEmail(texto)}
                    />

                    <TextInput
                        style={stylesForm.input_cpf}
                        placeholder='CPF'
                        placeholderTextColor="#888888"
                    />

                    
                        <TextInput
                            style={stylesForm.input_senha}
                            placeholder='Senha'
                            placeholderTextColor="#888888"
                            value={senha}
                            onChangeText={(texto) => setSenha(texto)}
                        />
                    

                    <Switch
                        width={'90%'}
                        height={'15%'}
                        onpress={toggleRole}
                        value={role}

                    />

                </View>

                {isViewVisible && (
                    <View style={stylesForm.opcoesEntrar}>
                        <Pressable style={stylesForm.button_entrar} onPress={login}>
                            <Text style={stylesForm.textButton}>Entrar</Text>
                        </Pressable>

                        <Pressable style={stylesForm.button_google} onPress={handleEntrar}>

                            <Text style={[stylesForm.textButton, { color: '#3F3F3F' }]}>Google</Text>
                        </Pressable>

                        <Pressable style={stylesForm.button_criarCon} onPress={criar}>
                            <Text style={stylesForm.textButton}>Criar Conta</Text>
                        </Pressable>
                    </View>
                )}
            </View>
        </View>
    );
}




const stylesForm = StyleSheet.create({

    formulario: {
        display: 'flex',
        flexDirection: 'column',
        flex: 2,
        alignItems: 'center',
        gap: 20,
        backgroundColor: colors.amarelo,
        borderRadius: 14

    },

    opcoesEntrar: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.amarelo,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        gap: 5,
        justifyContent: 'center'
    },

    input_email: {
        paddingLeft: 10,
        width: '90%',
        height: '15%',
        borderWidth: 3,
        borderColor: '#BBBBBB',
        borderRadius: 18,
        backgroundColor: colors.branco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    input_cpf: {
        paddingLeft: 10,
        width: '90%',
        height: '15%',
        borderWidth: 3,
        borderColor: "#BBBBBB",
        borderRadius: 18,
        backgroundColor: colors.branco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    input_nome: {
        paddingLeft: 10,
        width: '90%',
        height: '15%',
        borderWidth: 3,
        borderColor: "#BBBBBB",
        borderRadius: 18,
        backgroundColor: colors.branco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    input_senha: {
        paddingLeft: 10,
        width: '90%',
        height: '15%',
        borderWidth: 3,
        borderColor: '#BBBBBB',
        borderRadius: 18,
        backgroundColor: colors.branco,
        fontSize: 16,
        fontWeight: 'bold',
    },

    button_entrar: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '28%',
        borderRadius: 18,
        backgroundColor: colors.azulEscuro,
    },

    button_google: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '28%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    button_criarCon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '28%',
        borderRadius: 18,
        backgroundColor: colors.azulEscuro
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})


const stylesButton = (widths) =>StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: '100%',
        flex: 1,
        paddingBottom: '2%',
        backgroundColor: 'white'

    },

    div_form: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: widths <= 800 ? '90%' : '30%',
        borderRadius: 50,
        backgroundColor: colors.amarelo  
    },

    top: {
        width: '100%',
        height: '20%',
        alignItems: "center",

    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },


    div_txt_Perf: {
        alignItems: 'center',
        paddingTop: 13,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        height: '10%',
    },
})



export default LoginScreen;