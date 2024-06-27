import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ButtonBlue from '../../components/ButtonBlue';
import icon from '../../assets/icon_fracao.png';


const CreateClass = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [trail, settrail] = useState(false);
    const [selectedModule, setSelectedModule] = useState('');

    const modules = ['Module 1', 'Module 2', 'Module 3'];


    return (
        <View style={styles.container}>
            <HeaderTeacher />
            <View style={styles.form}>
                <Text style={styles.title}>Criar sala</Text>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={text => setTitle(text)}
                    placeholder="Digite o titulo da Sala"
                />

                <Text style={styles.label} >Descrição</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    placeholder="Digite a descrição da Sala"
                />

                <Text style={styles.label}>Trilhas</Text>
                <View style={styles.list}>
                    <View style={styles.checkboxContent}>
                        <Image style={styles.icon} source={icon} />
                        <Text style={styles.checkboxLabel}>Fração</Text>
                        <CheckBox
                            value={trail}
                            onValueChange={settrail}
                        />
                    </View>
                    <View style={styles.checkboxContent2}>
                        <Image style={styles.icon} source={icon} />
                        <Text style={styles.checkboxLabel}>Porcentagem</Text>
                        <CheckBox
                            value={trail}
                            onValueChange={settrail}
                        />
                    </View>
                    <View style={styles.checkboxContent}>
                        <Image style={styles.icon} source={icon} />
                        <Text style={styles.checkboxLabel}>Equação</Text>
                        <CheckBox
                            value={trail}
                            onValueChange={settrail}
                        />
                    </View>
                    <View style={styles.checkboxContent2}>
                        <Image style={styles.icon} source={icon} />
                        <Text style={styles.checkboxLabel}>Matrizes</Text>
                        <CheckBox
                            value={trail}
                            onValueChange={settrail}
                        />
                    </View>
                    <View style={styles.checkboxContent2}>
                        <Image style={styles.icon} source={icon} />
                        <Text style={styles.checkboxLabel}>Espressão</Text>
                        <CheckBox
                            value={trail}
                            onValueChange={settrail}
                        />
                    </View>
                </View>

                <Text style={styles.label}>Módulos</Text>
                <View style={styles.selctModule}>
                    <Picker
                        style={styles.input}
                        selectedValue={selectedModule}
                        onValueChange={itemValue => setSelectedModule(itemValue)}
                    >
                        {modules.map(module => (
                            <Picker.Item key={module} label={module} value={module} />
                        ))}
                    </Picker>
                </View>
                <View style={styles.buttons}>
                    <ButtonBlue title="Cancelar" />
                    <ButtonBlue title="Criar Sala" />
                </View>


            </View>
            <BottomMenuTeacher />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F6F7FF',
    },
    form: {
        width: '100%',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 105,
    },
    label: {
        width: '90%',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 20,
        marginBottom: 20

    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    checkboxContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        margin: 5,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5,
    },
    checkboxContent2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        margin: 5,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5,
    },
    icon: {
        width: 15,
        height: 15,
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxLabel: {
        fontSize: 16,
        marginLeft: 2,
        marginRight: 5,
    },
    buttons: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 60,
    },
    selctModule: {
        width: '90%',
        height: 40,
    }
});


export default CreateClass;