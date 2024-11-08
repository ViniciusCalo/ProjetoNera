import React, { useState, useEffect } from 'react';
import './styles.css';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch para obter as cartas ao carregar o componente
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://localhost:3333/memorygame/');
        const data = await response.json();

        // Para cada objeto, criar duas cartas com image1_url e image2_url como pares
        const duplicatedCards = data.flatMap(card => [
          { idmatch: card.idmatch, imageUrl: card.image1_url, uniqueId: `${card.idmatch}-1` }, // Primeira imagem do par
          { idmatch: card.idmatch, imageUrl: card.image2_url, uniqueId: `${card.idmatch}-2` }  // Segunda imagem do par
        ]);

        // Embaralha as cartas para o jogo
        setCards(duplicatedCards.sort(() => 0.5 - Math.random()));
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao buscar as cartas:', error);
      }
    };

    fetchCards();
  }, []);

  // Quando `secondCard` é definido, verifica se as duas cartas formam um par
  useEffect(() => {
    if (secondCard) {
      checkForMatch();
    }
  }, [secondCard]);

  // Função para resetar o turno
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  // Verificar se as duas cartas formam um par
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

  // Lógica para manipular o clique nas cartas
  const handleCardClick = (card) => {
    if (lockBoard || card === firstCard || matchedPairs.includes(card.idmatch)) return;

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  };

  // Verifica se o jogo foi vencido
  const isGameWon = matchedPairs.length === cards.length / 2;

  // Exibe uma mensagem de carregamento enquanto os dados ainda estão sendo buscados
  if (isLoading) {
    return <p>Carregando o jogo...</p>;
  }

  return (
    <div>
      <h1>Jogo da Memória de Frações</h1>
      {isGameWon ? (
        <h2>Parabéns! Você encontrou todos os pares!</h2>
      ) : (
        <div className="game-board">
          {cards.map((card) => {
            const isFlipped = card === firstCard || card === secondCard || matchedPairs.includes(card.idmatch);
            return (
              <div
                key={card.uniqueId}
                className={`card ${isFlipped ? 'flipped' : ''}`}
                onClick={() => handleCardClick(card)}
              >
                <img
                  src={isFlipped ? card.imageUrl : 'https://via.placeholder.com/100'} // Imagem de verso da carta
                  alt="Card"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
