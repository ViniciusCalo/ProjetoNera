import React from 'react';
import * as S from './styles'; 
import tip from './img/tip.png';
import exemploSvg from './img/exemplo.svg';
import seta from './img/set.svg'; 

S.StyledModal.setAppElement('#root');

const TipModal = ({ isOpen, onRequestClose }) => {
  return (
    <S.StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.BackButton onClick={onRequestClose}>
        <S.IconButton src={seta} alt="Voltar" />
      </S.BackButton>
      <S.Header>
        <S.Icon src={tip} alt="Dica" />
      </S.Header>
      <S.RoomTitle>Dica</S.RoomTitle>
      <S.Description>Encontre as combinações.</S.Description>

      <S.ImageContainer>
        <S.Image src={exemploSvg} alt="Exemplo" />
      </S.ImageContainer>
    </S.StyledModal>
  );
};

export default TipModal;
