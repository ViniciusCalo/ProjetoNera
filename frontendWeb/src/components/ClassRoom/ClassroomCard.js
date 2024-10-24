import React from 'react';
import * as C from './styles';

const ClassroomCard = ({ titulo, alunos }) => {
  return (
    <C.Card>
      <C.IconeSala>
        {/* Substitua por um ícone real ou componente de ícone */}
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
