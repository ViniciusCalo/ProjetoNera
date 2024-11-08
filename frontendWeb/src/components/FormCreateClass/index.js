import React, { useState } from 'react';
import * as C from './styles';
import axios from 'axios';
import ModalInfoClass from '../ModalInfoClass/index';
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
    const token = useState(localStorage.getItem('token'));
    const [Trail, setSelectedTrail] = useState('');
    const trails = useSelector((state) => state.trails);
    const [errors, setErrors] = useState({});

    const clearForm = () => {
        setTitle('');
        setDescription('');
        selectedModule('');
        setSelectedTrail('');
        setErrors({});
    };

    const handleModuleChange = (event) => {
        selectedModule(event.target.value);
    };
    const handleTrailChange = (trailId) => {
        setSelectedTrail(trailId);
        selectedTrail(trailId);
    };

    const validateFields = async () => {
        let hasError = false;
        const newErrors = {};

        if (!title) {
            newErrors.title = 'O título é obrigatório';
            hasError = true;
        } else {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/classrooms?title=${title}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.data.exists) {
                    newErrors.title = 'O título da sala de aula já existe';
                    hasError = true;
                }
            } catch (error) {
                console.error('Erro ao verificar título existente:', error);
            }
        }

        if (!description) {
            newErrors.description = 'A descrição é obrigatória';
            hasError = true;
        }
        if (!trail) {
            newErrors.trail = 'A trilha é obrigatória';
            hasError = true;
        }
        if (!module) {
            newErrors.module = 'O módulo é obrigatório';
            hasError = true;
        }

        setErrors(newErrors);
        return !hasError;
    };

    const creatClassroom = async (e) => {
        e.preventDefault();
        if (await validateFields()) {
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
                alert('Ocorreu um erro ao criar a sala de aula.');
                console.error(error.response?.data || error);
            }
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
                            <C.Input
                                id="title"
                                placeholder="Digite o título da Sala"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            {errors.title && <C.ErrorText>{errors.title}</C.ErrorText>}
                        </C.DivInput>
                        <C.DivInput>
                            <C.Label>Descrição</C.Label>
                            <C.Input
                                id="description"
                                placeholder="Digite uma descrição da Sala"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            {errors.description && <C.ErrorText>{errors.description}</C.ErrorText>}
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
                    {errors.trail && <C.ErrorText>{errors.trail}</C.ErrorText>}
                    
                    <C.Label2>Módulo</C.Label2>
                    <C.Select id="module" value={module} onChange={handleModuleChange}>
                        <option value="">Selecione o Módulo</option>
                        <option value="1">Módulo 1</option>
                        <option value="2">Módulo 2</option>
                    </C.Select>
                    {errors.module && <C.ErrorText>{errors.module}</C.ErrorText>}

                    <C.ButtonGroup>
                        <C.Button cancel>Cancelar</C.Button>
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
