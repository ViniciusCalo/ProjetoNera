import React from 'react';
import * as C from './styles' 

const TrailCard = ({ titulo, image, color }) => {
  return (
    <C.Card color={color}>
        <C.img style={{
          position: 'absolute',
          background: '#FFF',
          width: '20%',
          height: '30%',
          padding: 5,
          borderRadius: 8,
          marginBottom: 8,
          right: 0,
          top: 0
        }} src={image} alt={titulo} />
        <C.title>{titulo}</C.title>
    </C.Card>
  );
};

export default TrailCard;
