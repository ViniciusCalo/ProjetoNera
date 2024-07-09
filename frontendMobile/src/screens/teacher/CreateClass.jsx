import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import HeaderTeacher from '../../components/teacher/HeaderTeacher';
import BottomMenuTeacher from '../../components/MenuTeacher';
import ButtonBlue from '../../components/ButtonBlue';
import CheckBox from '../../components/CheckBox';



const CreateClass = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [trail, settrail] = useState(false);
    const [selectedModule, selectedModuleId] = useState('');
    const [selectedTrack, selectedTrackId] = useState('');

    const modules = [{ id: 1, modulo: 'Módulo 1' }, { id: 2, modulo: 'Módulo 2' }, { id: 3, modulo: 'Módulo 3' }];
    const trails = [{ id: 1, trilha: 'Fração' }, { id: 2, trilha: 'Porcentagem' }, { id: 3, trilha: 'Matrizes' }, { id: 4, trilha: 'Geometria' }, { id: 5, trilha: 'Espressão' }];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <HeaderTeacher />
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Criar sala</Text>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={text => setTitle(text)}
                    placeholder="Digite o título da Sala"
                    placeholderTextColor={"#6296C4"}
                />
                <Text style={styles.label} >Descrição</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={text => setDescription(text)}
                    placeholder="Digite a descrição da Sala"
                    placeholderTextColor={"#6296C4"}
                />
                <Text style={styles.label}>Trilhas</Text>
                <View style={styles.list}>
                    <FlatList
                        data={trails}
                        numColumns={3}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.checkboxContent}>
                                <Text style={styles.checkboxLabel}>{item.trilha}</Text>
                                <CheckBox
                                    isChecked={trail}
                                    handleToggle={() => settrail(!trail)}
                                />
                            </View>
                        )}
                    />
                </View>
                <Text style={styles.label}>Módulos</Text>
                <View style={styles.selctModule}>
                    <Picker
                        selectedValue={selectedModule}
                        onValueChange={(itemValue) => selectedModuleId(itemValue)}
                    >
                        <Picker.Item label="Selecione um Módulo" value="" />
                        {modules.map((item) => (
                            <Picker.Item key={item.id} label={item.modulo} value={item.id} />
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
    form: {
        display: 'flex',
        width: '90%',
        height: '100%',
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    label: {
        width: '90%',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginTop: '5%',
        marginBottom: '2%',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#6296C4',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    list: {
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    checkboxContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '31%',
        margin: 5,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 5,
        borderColor: '#6296C4',
        borderWidth: 1,
        paddingLeft: 5,

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
        fontSize: 12,
        marginLeft: 2,
        marginRight: 5,
    },
    buttons: {
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    selctModule: {
        display: 'flex',
        width: '90%',
        height: '20%',
         marginBottom: '5%',
         padding: 10,
    },
});


export default CreateClass;