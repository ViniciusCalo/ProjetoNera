import { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import colors from '../components/styles';



const LoginScreen = ({ navigation }) => {


    const [cor, setCor] = useState(colors.amarelo);
    const [flexDirection, setflexDirection] = useState("column");
    var validacao;


    const changeColor = (corFunc, flexDirect, num) => {
        setCor(corFunc);
        setflexDirection(flexDirect)
    }

    const validacaoCaminho = () => {
       if(cor === colors.amarelo){
        navigation.navigate('HomeTeacher');
       }else if(cor === colors.laranja){
        navigation.navigate('StudentProfile');
       }
    }

    const home = () => {
        navigation.replace('Home')
    }

    const RegisterTeacher = () => {
        navigation.replace('RegisterTeacher')
    }

    const handleEntrar = () => {
        navigation.navigate('HomeTeacher');
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

                <View style={stylesButtons.div_buttons}>
                    <Pressable style={stylesButtons.button_professor} onPress={() => changeColor(colors.amarelo, '', 1)}>
                        <Text style={[{ fontSize: 20 }, { color: 'white' }, { fontWeight: 'bold' }]}>Professor</Text>
                    </Pressable>
                    <View style={[stylesButtons.div_transction, { flexDirection: flexDirection }]}>
                        <View style={stylesButtons.div_prof}>
                            <Pressable style={stylesButtons.press_prof} onPress={() => changeColor(colors.amarelo, '', 1)}></Pressable>
                        </View>
                        <View style={stylesButtons.div_aluno}>
                            <Pressable style={stylesButtons.press_aluno} onPress={() => changeColor(colors.laranja, 'column-reverse', 2)}></Pressable>
                        </View>
                    </View>
                    <Pressable style={stylesButtons.button_aluno} onPress={() => changeColor(colors.laranja, 'column-reverse', 2)}>
                        <Text style={[{ fontSize: 20 }, { color: 'white' }, { fontWeight: 'bold' }]}>Aluno</Text>
                    </Pressable>
                </View>

                {/*view form formulario*/}
                <View style={stylesForm.formulario}>

                    <TextInput style={stylesForm.input_email} placeholder='Email'></TextInput>
                    <TextInput style={stylesForm.input_cpf} placeholder='CPF'></TextInput>
                    <TextInput style={stylesForm.input_senha} placeholder='Senha'></TextInput>
                    <Text style={[{ width: '100%' }, {}, { height: '30%' }, { marginLeft: '100%' }]}>Esqueceu a senha ?</Text>



                </View>

                <View style={stylesForm.opcoesEntrar}>
                    <Pressable style={stylesForm.button_entrar} onPress={validacaoCaminho}>

                        <Text style={[{ fontSize: 15 }, { color: 'white' }]}>Entrar</Text>
                    </Pressable>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <View>
                            <Text style={{ width: 50, textAlign: 'center' }}>OU</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>


                    <Pressable style={stylesForm.button_criarCon} onPress={RegisterTeacher}>
                        <Text style={[{ fontSize: 15 }, { color: 'white' }]}>Criar conta</Text>
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
        paddingTop: 20,
        alignItems: 'center',

    },

    opcoesEntrar: {
        width: '100%',
        height: '30%',
        paddingTop: '5%',
        gap: 14,
        alignItems: 'center',

    },

    input_email: {
        margin: 13,
        paddingLeft: 15,
        width: '90%',
        height: '20%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_cpf: {
        margin: 13,
        paddingLeft: 15,
        width: '90%',
        height: '20%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    input_senha: {
        margin: 13,
        paddingLeft: 15,
        width: '90%',
        height: '20%',
        borderRadius: 18,
        backgroundColor: colors.branco
    },

    button_entrar: {
        paddingTop: 8,
        alignItems: 'center',
        width: '90%',
        height: '30%',
        borderRadius: 18,
        backgroundColor: colors.azulEscuro
    },
    button_criarCon: {
        paddingTop: 8,
        alignItems: 'center',
        width: '50%',
        height: '30%',
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
        height: "70%",
        borderRadius: 50,
        alignItems: "center"
    },

    top: {
        width: '100%',
        height: '30%',
        alignItems: "center",

    },

    img: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },


    div_buttons: {
        display: 'flex',
        flexDirection: 'row',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        width: '100%',
        height: '15%',
    },

    button_aluno: {
        paddingTop: 25,
        alignItems: "center",
        alignItems: "center",
        width: '40%',
        height: '100%',
        backgroundColor: colors.laranja,
        borderTopRightRadius: 50,
        resizeMode: "contain"
    },

    button_professor: {
        paddingTop: 25,
        alignItems: "center",
        width: '40%',
        height: '100%',
        backgroundColor: colors.amarelo,
        borderTopLeftRadius: 50,
        resizeMode: "contain"
    },

    div_transction: {
        display: "flex",
        width: '20%',
        height: '100%',
        resizeMode: "contain"
    },

    div_prof: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.laranja,
    },

    press_prof: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: colors.amarelo,
    },

    div_aluno: {
        width: '100%',
        height: '50%',
        backgroundColor: colors.amarelo,
    },

    press_aluno: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: colors.laranja,
    },
})



export default LoginScreen;