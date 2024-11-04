import React, { useState } from 'react';
import * as C from './styles';
//Redux
import { useDispatch, useSelector } from 'react-redux';


const FormCreateClass = () => {
    const [selectedTrail, setSelectedTrail] = useState('');
    const trails = useSelector((state) => state.trails);


    const handleTrailSelect = (trail) => {
        setSelectedTrail(trail);
    };
    return (
        <>
            <C.Container>
                <C.Form>
                    <C.Title>Criar Sala de Aula</C.Title>
                    <C.DivInputs>
                        <C.DivInput>
                            <C.Label>Título</C.Label>
                            <C.Input id="title" placeholder="Digite o título da Sala" ></C.Input>
                        </C.DivInput>
                        <C.DivInput>
                            <C.Label>Descrição</C.Label>
                            <C.Input id="description" placeholder="Digite uma descrição da Sala"></C.Input>
                        </C.DivInput>
                    </C.DivInputs>
                    <C.Label>Escolher Trilha</C.Label>
                    <C.TrackContainer>
                        {trails.map((trail) => (
                            <C.TrackCard
                                titulo={trail.name}
                                key={trail.id}
                                selected={selectedTrail === trail.id}
                                onClick={() => handleTrailSelect(trail.id)}
                            >
                                <img src={trail.image} alt={trail.name} />
                                {trail.name}
                            </C.TrackCard>
                        ))}
                    </C.TrackContainer>
                    <C.Label2>Módulo</C.Label2>
                    <C.Select id="module">
                        <option>Selecione o Módulo</option>
                        <option value="1">Módulo 1</option>
                        <option value="2">Módulo 2</option>
                    </C.Select>

                    <C.ButtonGroup>
                        <C.Button cancel>Cancelar</C.Button>
                        <C.Button>Salvar</C.Button>
                    </C.ButtonGroup>
                </C.Form>
            </C.Container>
        </>

    );
};

export default FormCreateClass;
