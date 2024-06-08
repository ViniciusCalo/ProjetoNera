import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomMenuTeacher from './MenuTeacher';
import ButtonBlue from './ButtonBlue';
import IconNera from './IconNera';

const CreateClass = ({ navigation }) => {
    const [className, setClassName] = useState('');
    const [selectedTrail, setSelectedTrail] = useState(false);
    const [selectedModule, setSelectedModule] = useState(false);
    const [classToken, setClassToken] = useState('Token da sala');

    const handleCreateNewClass = () => {
        // Aqui você pode adicionar a lógica para criar a sala com os dados do formulário
        navigation.navigate('CreateNewClass');
    };

    return (
        <View style={styles.page}>
            {/* TopIcon do nera */}
            <View style={styles.topIcon}>
                <IconNera />
            </View>
            {/* Texto 'criar sala da aula' */}
            <View style={styles.containerClassName}>
                <Text style={styles.titleContainerCreateClassroom}>Criar Sala de Aula</Text>
            </View>
            {/* Input para dar um nome a sala */}
            <View style={styles.containerToSetClassName}>
               <TextInput style={styles.inputToCreateClassroom}
                    onChangeText={text => setClassName(text)}
                    value={className}
                    placeholder="Digite o Nome da Sala"
                />
            </View>
            {/* Primeiro Picker para escolher a trilha */}
            <View style={styles.containerSelectTrail}>
                <Picker
                    style={styles.formsInputStyles}
                    selectedValue={selectedTrail}
                    onValueChange={(itemValue, itemIndex) => setSelectedTrail(itemValue)}
                >
                    <Picker.Item label="Selecione a Trilha" value="" />
                    <Picker.Item label="Trilha 1" value="Trilha 1" />
                    <Picker.Item label="Trilha 2" value="Trilha 2" />
                    <Picker.Item label="Trilha 3" value="Trilha 3" />
                </Picker>
            </View>
            {/* Segundo Picker, para escolher o módulo */}
            <View style={styles.containerSelectModule}>
                <Picker
                    style={styles.formsInputStyles}
                    selectedValue={selectedModule}
                    onValueChange={(itemValue, itemIndex) => setSelectedModule(itemValue)}
                >
                    <Picker.Item label="Selecione o Módulo>" value="" />
                    <Picker.Item label="Modulo 1" value="Modulo 1" />
                    <Picker.Item label="Modulo 2" value="Modulo 2" />
                    <Picker.Item label="Modulo 3" value="Modulo 3" />
                </Picker>
            </View>
            {/* Código da sala para acesso dos alunos */}
            <View style={styles.containerClassToken}>
                <Text style={styles.text}>Código da Sala:</Text>
                <Text style={styles.text}>{classToken}</Text>
            </View>
            <View style={styles.containerButtonCreateClass}>
            <ButtonBlue
                onPress={handleCreateNewClass}
                title="Criar Sala"
                accessibilityLabel="Criar Sala"
            />
            </View>
            <BottomMenuTeacher />
        </View >
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F6F7FF',
    },
    topIcon: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        marginTop: 50
    },
    containerClassName: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '80%',
        height: '10%',
        elevation: 5,
    },
    containerToSetClassName:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '30%',
        left: '10%',
        width: '80%',
        height: '10%',
        elevation: 5,
    },
    containerSelectTrail:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '40%',
        left: '10%',
        width: '80%',
        height: '10%',
        elevation: 5,
    },

    containerSelectModule: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '10%',
        width: '80%',
        height: '10%',
        elevation: 5,
    },

    containerClassToken: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '60%',
        left: '10%',
        width: '80%',
        height: '10%',
        elevation: 5,
    },

    containerButtonCreateClass:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '70%',
        left: '10%',
        width: '30%',
        height: '10%',
        transform: [{ translateX: '80%' }],
        elevation: 5,
    },

    titleContainerCreateClassroom: {
        flex: 1,
        fontSize: 25,
        top: '5%',
        fontWeight: '600',
    },

    inputToCreateClassroom:{
        flex: 1,
        borderRadius: 30,
        justifyContent: 'center',
        color: '#6296C4',
        width: '60%',
        height: '10%',
        borderWidth: 1,
        borderColor: '#6296C4',
        paddingHorizontal: 10, // Adiciona um preenchimento horizontal para evitar que o texto toque na borda
        margin: 20,
    },
    formsInputStyles: {
        flex: 1,
        justifyContent: 'center',
        gap: 20,
        borderRadius: 30,
        color: '#6296C4',
        width: '60%',
        height: '5%',
        borderWidth: 1,
        borderColor: '#6296C4',
        paddingHorizontal: 10, // Adiciona um preenchimento horizontal para evitar que o texto toque na borda
        margin: 20, // Adiciona um preenchimento vertical para evitar que o texto toque na borda
    },

    text: {
        fontSize: 20,
        fontWeight: '650',
    },
});

export default CreateClass;