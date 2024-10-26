import React, { useState } from 'react';
import * as C from './styles';
import ClassroomCard from './ClassroomCard';
import ModalInfoClass from '../ModalInfoClass/index';


const aulas = [
  { id: 1, title: '6° Ano A', alunos: 40 },
  { id: 2, title: '7° Ano A', alunos: 40 },
  { id: 3, title: '6° Ano A', alunos: 40 },
  { id: 4, title: '7° Ano A', alunos: 40 },
  { id: 5, title: '6° Ano A', alunos: 40 },
  { id: 6, title: '7° Ano A', alunos: 40 },
  { id: 7, title: '6° Ano A', alunos: 40 },
  { id: 8, title: '7° Ano A', alunos: 40 },
  { id: 9, title: '6° Ano A', alunos: 40 },
  { id: 10, title: '7° Ano A', alunos: 40 },
];

const TelaClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const openModal = (aula) => {
    setSelectedClass(aula);
  };

  const closeModal = () => {
    setSelectedClass(null);
  };

  return (
    <>
      <C.GlobalStyle /> {/* Garante que o fundo azul cubra todo o body */}
      <C.Container>
        <C.ContainerC>
          <C.TitleContainer>
            <C.Title>Minhas Salas de Aula</C.Title>
            <C.Line />
          </C.TitleContainer>
          <C.GridContainer>
            {aulas.map((aula) => (
              <ClassroomCard
                key={aula.id}
                titulo={aula.title}
                alunos={aula.alunos}
                onClick={() => openModal(aula)}
              />
            ))}
          </C.GridContainer>
        </C.ContainerC>
        <ModalInfoClass
          isOpen={!!selectedClass}
          onRequestClose={closeModal}
          title={selectedClass?.title}
          alunos={selectedClass?.alunos}
        />
      </C.Container>
    </>
  );
};

export default TelaClasses;
