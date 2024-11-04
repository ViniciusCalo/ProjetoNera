import React from 'react';
import * as C from './styles' // Importando o arquivo CSS
//Redux
import { useSelector } from 'react-redux'

const ClassroomCard = ({ titulo, trailId }) => {
  
  const trail = useSelector((state) => 
    state.trails.find((t) => t.id === trailId)
);


  return (
    <C.Card>
        <C.IconeSala>
            {trail ? (
                <C.IconImage src={trail.image} alt={`Ícone da sala ${trail.name}`} />
            ) : (
                <p>Trilha não encontrada</p>
            )}
        </C.IconeSala>
      <C.Title>{titulo}</C.Title>
    </C.Card>
  );
};

export default ClassroomCard;
