import React from 'react';
import * as C from './styles';

const ClassroomCard = ({ titulo, alunos, onClick }) => {

  
  return (
    <C.Card onClick={onClick}>
      <C.IconeSala>
        <C.IconImage src="/path-to-icon.png" alt="Ícone da sala" />
      </C.IconeSala>
      <C.Title>{titulo}</C.Title>
      <C.Info>
        <C.UserIcon />
        <C.TextoInfo>{alunos} Alunos</C.TextoInfo>
      </C.Info>
    </C.Card>
  );
};

export default ClassroomCard;
