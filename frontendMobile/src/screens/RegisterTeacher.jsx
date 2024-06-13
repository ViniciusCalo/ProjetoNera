import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import colors from '../components/styles';
import Switch from '../components/SwitchProfile';
import axios from 'axios';





const LoginScreen = ({ navigation }) => {
    const [cor, setCor] = useState(colors.azulEscuro);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const Login = () => {
        navigation.replace('LoginScreen')
    }

    const handleEntrar = () => {
        navigation.navigate('StudentProfile');
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3333/user/register", {
                username: nome,
                useremail: email,
                userpassword: senha,
                role: 'student'
            });
            window.location.reload()
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
                style={[stylesButtons.div_form, { backgroundColor: cor }]}
            >

                {/*view form formulario*/}
                <View
                    style={stylesForm.formulario}>
                    <Text style={[{ fontWeight: 'bold' }, { color: 'white' }, { fontSize: 25 }]}>Crie seu Perfil</Text>
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
                        style={stylesForm.input_nome}
                        placeholder='Nome'
                        placeholderTextColor="#888888"
                        value={nome}
                        onChangeText={(texto) => setNome(texto)}
                    />

                    <View style={[{ display: 'flex' }, { flexDirection: 'row' }, { height: '15%' }, { width: '90%' }, { gap: 5 }]}>
                        <TextInput
                            style={stylesForm.input_senha}
                            placeholder='Senha'
                            placeholderTextColor="#888888"
                            value={senha}
                            onChangeText={(texto) => setSenha(texto)}
                        />

                        <TextInput style={stylesForm.input_senha} placeholder='Confimar senha' placeholderTextColor="#888888"></TextInput>
                    </View>

                    <Switch width={'90%'} height={'15%'}></Switch>
                </View>

                <View style={stylesForm.opcoesEntrar}>
                    <Pressable style={stylesForm.button_entrar} onPress={handleClick}>
                        <Text style={stylesForm.textButton}>Criar conta</Text>
                    </Pressable>

                    <Pressable style={stylesForm.button_google} onPress={handleEntrar}>

                        <Text style={[stylesForm.textButton, { color: '#3F3F3F' }]}>Google</Text>
                    </Pressable>

                    <Pressable style={stylesForm.button_criarCon} onPress={Login}>
                        <Text style={stylesForm.textButton}>Entrar</Text>
                    </Pressable>
                </View>

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
        gap: 2,
        backgroundColor: colors.amarelo,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15

    },

    opcoesEntrar: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.amarelo,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        gap: 8,
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
        width: '49%',
        height: '100%',
        borderWidth: 3,
        borderColor: "#BBBBBB",
        borderRadius: 18,
        backgroundColor: colors.branco,
        fontSize: 15,
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






const stylesButtons = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: '100%',
        flex: 1,
        padding: '5%',
        paddingTop: '0%',
        gap: 10,
        backgroundColor: 'wh'

    },

    div_form: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        borderRadius: 50,
        backgroundColor: colors.branco
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