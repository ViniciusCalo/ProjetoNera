import React, { useState, useEffect } from 'react';
import * as C from './styles';
import cardFront from '../../assets/CardFront.png'
import reload from '../../assets/reload.png'
import tip from '../../assets/tip.png'
import next from '../../assets/next.png'

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Função para buscar as cartas
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

  // Carrega as cartas ao montar o componente
  useEffect(() => {
    fetchCards();
  }, []);

  // Verifica se as cartas combinam
  useEffect(() => {
    if (secondCard) {
      checkForMatch();
    }
  }, [secondCard]);

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

  const isGameWon = matchedPairs.length === cards.length / 2;

  // Função para reiniciar o jogo
  const handleReload = () => {
    setMatchedPairs([]);
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
    fetchCards(); // Recarrega e embaralha as cartas
  };

  // Função para mostrar uma dica (exemplo: revelar temporariamente um par de cartas)
  const handleTip = () => {
    alert("Implementar dica!");
  };

  // Função para avançar para o próximo nível (pode ser customizado)
  const handleNext = () => {
    alert("Próximo nível não implementado ainda!");
  };

  if (isLoading) {
    return <p>Carregando o jogo...</p>;
  }


  return (
    <>
      <C.Header>
        <C.Titulo>MODULO I - Frações</C.Titulo>
      </C.Header>
      <C.Game>
        <C.GameContainer>
          <C.Title>Jogo da Memória de Frações</C.Title>
          {isGameWon ? (
            <C.Message>Parabéns! Você encontrou todos os pares!</C.Message>
          ) : (
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
          )}

          <C.ContainerMenu>
            <C.BtnReload onClick={handleReload}>
              <C.iconButton src={reload} alt='Refazer' />
              <span>Refazer</span>
            </C.BtnReload>

            <C.BtnTip onClick={handleTip}>
              <C.IconTip src={tip} alt='Dica' />
              <span>Dica</span>
            </C.BtnTip>

            <C.BtnNext onClick={handleNext} disabled={null}>
              <C.iconButton src={next} alt='Próximo' />
              <span>Próximo</span>
            </C.BtnNext>
          </C.ContainerMenu>
        </C.GameContainer>
      </C.Game>

    </>
  );

};


export default MemoryGame;