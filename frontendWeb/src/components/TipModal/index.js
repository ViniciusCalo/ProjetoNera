import React from 'react';
import * as S from './styles';
import tip from './img/tip.png';
import memoryGameExample from './img/memory_example.svg'; // Exemplo para Memory Game
import seta from './img/set.svg';

S.StyledModal.setAppElement('#root');

const TipModal = ({ isOpen, onRequestClose, gameType }) => {
  // Configurações específicas de cada jogo
  const gameTips = {
    memorygame: {
      description: 'Encontre as combinações entre as cartas e memorize a posição delas.',
      image: memoryGameExample,
    },
    quizgame: {
      description: 'Conte as fatias faltantes! Identifique quantas fatias estão faltando na pizza. Esse número será o numerador da fração correspondente.',
    },
  };

  // Obtém o conteúdo específico com base no tipo de jogo
  const currentTip = gameTips[gameType] || {
    description: 'Escolha um jogo para receber dicas específicas.',
    image: '',
  };

  return (
    <S.StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <S.BackButton onClick={onRequestClose}>
        <S.IconButton src={seta} alt="Voltar" />
      </S.BackButton>
      <S.Header>
        <S.Icon src={tip} alt="Dica" />
      </S.Header>
      <S.RoomTitle>Dica</S.RoomTitle>
      <S.Description>{currentTip.description}</S.Description>

      {currentTip.image && (
        <S.ImageContainer>
          <S.Image src={currentTip.image} alt="Exemplo do jogo" />
        </S.ImageContainer>
      )}
    </S.StyledModal>
  );
};

export default TipModal;
