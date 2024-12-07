import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from './styles';
import TipModal from '../TipModal';
import cardFront from '../../assets/CardFront.png';
import reload from '../../assets/reload.png';
import tip from '../../assets/tip.png';
import next from '../../assets/next.png';
import fogos from '../../assets/fogos.png'

const MemoryGame = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false); // Indica se o jogo terminou

  const fetchCards = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/memorygame/`);
      const data = await response.json();

      const duplicatedCards = data.flatMap(card => [
        { idmatch: card.idmatch, imageUrl: card.image1_url, uniqueId: `${card.idmatch}-1` },
        { idmatch: card.idmatch, imageUrl: card.image2_url, uniqueId: `${card.idmatch}-2` }
      ]);

      setCards(duplicatedCards.sort(() => 0.5 - Math.random()));
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar as cartas:', error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    if (secondCard) {
      checkForMatch();
    }
  }, [secondCard]);

  useEffect(() => {
    if (matchedPairs.length === cards.length / 2 && cards.length > 0) {
      setIsGameOver(true); // Define o estado do jogo como finalizado
    }
  }, [matchedPairs, cards]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  const checkForMatch = () => {
    setLockBoard(true);
    const isMatch = firstCard.idmatch === secondCard.idmatch;

    if (isMatch) {
      setMatchedPairs([...matchedPairs, firstCard.idmatch]);
      resetTurn();
    } else {
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  };

  const handleCardClick = (card) => {
    if (lockBoard || card === firstCard || matchedPairs.includes(card.idmatch)) return;

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  };


  const handleReload = () => {
    setMatchedPairs([]);
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
    setIsGameOver(false); // Reinicia o estado de fim de jogo
    fetchCards();
  };

  const handleTip = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBackToModules = () => {
    navigate('/module'); // Navega para a tela de módulos
  };


  // Renderização do final do jogo
  if (isGameOver) {
    return (
      <C.Game>
        <C.GameOverContainer>
          <C.FunIllustration src={fogos} alt="Parabéns!" />
          <C.GameOverTitle>Jogo da Memória Finalizado!</C.GameOverTitle>
          <C.ScoreText>
            Você encontrou <strong>{matchedPairs.length}</strong> pares de {cards.length / 2}.
          </C.ScoreText>
          <C.RestartButton onClick={handleBackToModules}>Voltar para módulo</C.RestartButton>
        </C.GameOverContainer>
      </C.Game>
    );
  }

  if (isLoading) {
    return (
      <C.LoadingContainer>
        <C.Spinner /> {/* Animação de carregamento */}
        <C.LoadingText>Carregando o jogo...</C.LoadingText>
      </C.LoadingContainer>
    );
  }


  return (
    <>
      <C.Header>
        <C.Titulo>MODULO I - Frações</C.Titulo>
      </C.Header>
      <C.Game>
        <C.GameContainer>
          <C.Title>Jogo da Memória de Frações</C.Title>
          <C.GameBoard>
            {cards.map((card) => {
              const isFlipped = card === firstCard || card === secondCard || matchedPairs.includes(card.idmatch);
              return (
                <C.Card
                  key={card.uniqueId}
                  className={isFlipped ? 'flipped' : ''}
                  onClick={() => handleCardClick(card)}
                >
                  <C.CardImage
                    src={isFlipped ? card.imageUrl : cardFront}
                    alt="Card"
                  />
                </C.Card>
              );
            })}
          </C.GameBoard>

          <C.ContainerMenu>
            <C.BtnReload onClick={handleReload}>
              <C.iconButton src={reload} alt='Refazer' />
              <span>Refazer</span>
            </C.BtnReload>

            <C.BtnTip onClick={handleTip}>
              <C.IconTip src={tip} alt='Dica' />
              <span>Dica</span>
            </C.BtnTip>
          </C.ContainerMenu>
        </C.GameContainer>
      </C.Game>

      {/* Componente ModalDica */}
      <TipModal isOpen={isModalOpen} gameType={"memorygame"} onRequestClose={closeModal} />
    </>
  );
};

export default MemoryGame;
