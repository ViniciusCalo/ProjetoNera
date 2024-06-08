import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import colors from '../components/styles';
import RadioButton from '../components/redioButton';



const LoginScreen = ({ navigation }) => {


    const [cor, setCor] = useState(colors.amarelo);
    const [flexDirection, setflexDirection] = useState("column");

    const Login = () => {
        navigation.replace('LoginScreen')
    }

    const handleEntrar = () => {
        navigation.navigate('StudentProfile');
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
            <View style={[stylesButtons.div_form, { backgroundColor: cor }]}>
                {/*view form buttons*/}

                <View style={stylesButtons.div_txt_Perf}>
                    <Text style={[{ fontWeight: 'bold' }, { color: 'white' }, { fontSize: 25 }]}>Crie seu Perfil</Text>
                </View>

                {/*view form formulario*/}
                <View style={stylesForm.formulario}>

                    <TextInput style={stylesForm.input_email} placeholder='Email'></TextInput>
                    <TextInput style={stylesForm.input_cpf} placeholder='CPF'></TextInput>
                    <TextInput style={stylesForm.input_nome} placeholder='Nome'></TextInput>

                    <View style={[{ display: 'flex' }, { flexDirection: 'row' }, { height: '15%' }, { width: '90%' }, { gap: 5 }, { margin: 8 }]}>
                        <TextInput style={stylesForm.input_senha} placeholder='Senha'></TextInput>
                        <TextInput style={stylesForm.input_senha} placeholder='Confimar senha'></TextInput>
                    </View>

                    <View style={[{ display: 'flex' }, { alignItems: 'center' }, { flexDirection: 'row' }, { height: '15%' }, { width: '90%' }, { gap: 50 }, { margin: 5, paddingLeft: 20 }]}>
                        <RadioButton txt={"Professor"}></RadioButton>
                        <RadioButton txt={"Aluno"}></RadioButton>
                    </View>


                </View>

                <View style={stylesForm.opcoesEntrar}>
                    <Pressable style={stylesForm.button_entrar} onPress={handleEntrar}>

                        <Text style={[{ fontSize: 15 }, { color: 'white' }]}>Criar conta</Text>
                    </Pressable>
                    
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }}>OU</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>

                    <Pressable style={stylesForm.button_google} onPress={handleEntrar}>

                        <Text style={[{ fontSize: 15 }, { color: 'black' }]}>Google</Text>
                    </Pressable>

                    <Pressable style={stylesForm.button_criarCon} onPress={Login}>
                        <Text style={[{ fontSize: 15 }, { color: 'white' }]}>Entrar</Text>
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
        width: '100%',
        height: '55%',
        alignItems: 'center',
    },

    opcoesEntrar: {
        width: '100%',
        height: '36%',
        gap: 5,
        alignItems: 'center',

    },

    input_email: {
        margin: 8,
        paddingLeft: 15,
        width: '90%',
        height: '15%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_cpf: {
        margin: 8,
        paddingLeft: 15,
        width: '90%',
        height: '15%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_nome: {
        margin: 8,
        paddingLeft: 15,
        width: '90%',
        height: '15%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_senha: {
        paddingLeft: 15,
        width: '49%',
        height: '100%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    button_entrar: {
        paddingTop: 8,
        alignItems: 'center',
        width: '90%',
        height: '25%',
        borderRadius: 18,
        backgroundColor: colors.azulEscuro
    },

    button_google: {
        paddingTop: 8,
        alignItems: 'center',
        width: '90%',
        height: '25%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    button_criarCon: {
        paddingTop: 8,
        alignItems: 'center',
        width: '50%',
        height: '25%',
        borderRadius: 18,
        backgroundColor: colors.azulEscuro
    }
})






const stylesButtons = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: '100%',
        width: '100%',
        padding: '5%',
        paddingTop: '0%',
        gap: 10
    },

    div_form: {
        width: '100%',
        height: "80%",
        borderRadius: 50,
        alignItems: "center"
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