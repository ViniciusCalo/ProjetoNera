import React from 'react';
import icon1 from './img/icon1.svg'
import fracaoIcon from './img/fracao.png';
import studentIcon from './img/studentIcon.png';
import * as C from './styles' // Importando o arquivo CSS

const ClassroomCard = ({ titulo }) => {
  return (
    <C.Card>
      <C.Title>{titulo}</C.Title>
    </C.Card>
  );
};

export default ClassroomCard;
