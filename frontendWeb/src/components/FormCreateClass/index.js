import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import ModalInfoClass from '../ModalInfoClass/index';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/classroomSlice';


const FormCreateClass = () => {
    const dispatch = useDispatch();
    const [classroom, setClassroom] = useState([{}]);
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [module, selectedModule] = useState('');
    const [trail, selectedTrail] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [Trail, setSelectedTrail] = useState('')
    const trails = useSelector((state) => state.trails);

    // Clear form function
    const clearForm = () => {
        setTitle('');
        setDescription('');
        selectedModule('');
        setSelectedTrail('');
    };

    const handleModuleChange = (event) => {
        selectedModule(event.target.value);
    };
    const handleTrailChange = (trailId) => {
        // Função para manipular a trilha selecionada, usando trailId
        setSelectedTrail(trailId); // Exemplo de atualização de estado
        selectedTrail(trailId)
    };
    

    // Create a classroom function 
    const creatClassroom = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/classrooms/create/`, {
                classroomname: title,
                classroomdescription: description,
                trackid: trail,
                moduleid: module,

            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setClassroom(res.data.newClassroom);
            console.log(res.data.message);
            console.log(classroom);
            setModalVisible(true);
            dispatch(addItem(res.data.newClassroom));
            clearForm();
        } catch (error) {
            // Captura o erro e exibe a mensagem
            const err = error.response.data;
            if (err.message === 'Classroom already exists') {
                alert('O titulo da sala de aula já existe!');
            } else {
                alert('Ocorreu um erro ao criar a sala de aula.');
            }
            console.error(err);
        }
    };

    return (
        <>
            <C.Container>
                <C.Form>
                    <C.Title>Criar Sala de Aula</C.Title>
                    <C.DivInputs>
                        <C.DivInput>
                            <C.Label>Título</C.Label>
                            <C.Input id="title" placeholder="Digite o título da Sala" value={title} onChange={(event) => setTitle(event.target.value)}></C.Input>
                        </C.DivInput>
                        <C.DivInput>
                            <C.Label>Descrição</C.Label>
                            <C.Input id="description" placeholder="Digite uma descrição da Sala" value={description}
                                onChange={(event) => setDescription(event.target.value)}></C.Input>
                        </C.DivInput>
                    </C.DivInputs>
                    <C.Label>Escolher Trilha</C.Label>
                    <C.TrackContainer>
                        {trails && trails.length > 0 ? (
                            trails.map((trail) => (
                                <C.TrackCard
                                    titulo={trail.name}
                                    key={trail.id}
                                    selected={Trail === trail.id}
                                    value={trail}
                                    onClick={() => handleTrailChange(trail.id)}
                                >
                                    <img src={trail.image} alt={trail.name} />
                                    {trail.name}
                                </C.TrackCard>
                            ))
                        ) : (
                            <p>Carregando trilhas ou nenhuma trilha encontrada.</p>
                        )}
                    </C.TrackContainer>
                    <C.Label2>Módulo</C.Label2>
                    <C.Select id="module" value={module} onChange={handleModuleChange} >
                        <option>Selecione o Módulo</option>
                        <option value="1">Módulo 1</option>
                        <option value="2">Módulo 2</option>
                    </C.Select>

                    <C.ButtonGroup>
                        <C.Button >Cancelar</C.Button>
                        <C.Button onClick={creatClassroom}>Salvar</C.Button>
                    </C.ButtonGroup>
                </C.Form>
            </C.Container>
            <ModalInfoClass
                isOpen={modalVisible}
                setModalVisible={setModalVisible}
                classroom={classroom}
                idTrail={classroom.trackid}
            />
        </>

    );
};

export default FormCreateClass;
