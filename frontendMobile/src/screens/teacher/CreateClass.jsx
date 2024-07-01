import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, CheckBox, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ButtonBlue from '../../components/ButtonBlue';
import icon from '../../assets/icon_fracao.png';
import { FlatList } from 'react-native-web';


const CreateClass = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [trail, settrail] = useState(false);
    const [selectedModule, selectedModuleId] = useState('');
    const [selectedTrack, selectedTrackId] = useState('');

    const modules = [{ id: 1, modulo: 'Módulo 1' }, { id: 2, modulo: 'Módulo 2' }, { id: 3, modulo: 'Módulo 3' }, { id: 4, modulo: 'Módulo 4' }, { id: 5, modulo: 'Módulo 5' }];
    const trails = [{ id: 1, trilha: 'Fração' }, { id: 2, trilha: 'Porcentagem' }, { id: 3, trilha: 'Matrizes' }, { id: 4, trilha: 'Geometria' }, { id: 5, trilha: 'Espressão' }];

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3333/teacher/classroom/create", {
                classroomname: title,
                classroomdescription: description,
                teacherid: teacherId,
                trackid: selectedTrackId,
                moduleid: selectedModuleId

            });
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };


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
                    <FlatList
                        data={trails}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <View style={item.trilha === 'Fração' || 'Matrizes' ? styles.checkboxContent : styles.checkboxContent2}>
                                <Text style={styles.checkboxLabel}>{item.trilha}</Text>
                                <CheckBox
                                    value={trail === item.trilha}
                                    onValueChange={() => settrail(item.trilha)}
                                />  
                            </View>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>

                <Text style={styles.label}>Módulos</Text>
                <View style={styles.selctModule}>
                    <Picker
                        style={styles.input}
                        selectedValue={selectedModule}
                        onValueChange={(itemValue, itemIndex) => selectedTrackId(itemIndex)}
                    >
                        <Picker.Item label="Selecione um Módulo" value="" />
                        {modules.map(module => (
                            <Picker.Item key={module.id} label={module.modulo} value={module.modulo} />
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
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 250,
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
        width: '90%',
        height: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    checkboxContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
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