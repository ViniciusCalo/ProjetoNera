import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, ActivityIndicator, Alert } from 'react-native';
import BottomMenuStudent from '../../components/MenuStudent';
import colors from '../../components/styles'

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_NERA_URL}/memorygame/`);
      const data = await response.json();

      const duplicatedCards = data.flatMap(card => [
        { idmatch: card.idmatch, imageUrl: card.image1_url, uniqueId: `${card.idmatch}-1` },
        { idmatch: card.idmatch, imageUrl: card.image2_url, uniqueId: `${card.idmatch}-2` }
      ]);

      setCards(duplicatedCards.slice(0, 12).sort(() => 0.5 - Math.random())); // Limita para 12 cartas (4x3)
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

  const handleReload = () => {
    setMatchedPairs([]);
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
    fetchCards();
  };

  const handleTip = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    Alert.alert("Próximo nível não implementado ainda!");
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando o jogo...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MODULO I - Frações</Text>
      <Text style={styles.subtitle}>Jogo da Memória de Frações</Text>

      {isGameWon ? (
        <Text style={styles.message}>Parabéns! Você encontrou todos os pares!</Text>
      ) : (
        <View style={styles.gameBoard}>
          {cards.map(card => {
            const isFlipped = card === firstCard || card === secondCard || matchedPairs.includes(card.idmatch);
            return (
              <TouchableOpacity
                key={card.uniqueId}
                style={[styles.card, isFlipped && styles.cardFlipped]}
                onPress={() => handleCardClick(card)}
              >
                <Image
                  source={{ uri: isFlipped ? card.imageUrl : '../../assets/CardFront.png'}}
                  style={styles.cardImage}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      )}

      <View style={styles.menu}>
        <TouchableOpacity style={styles.button} onPress={handleReload}>
          <Text>Refazer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleTip}>
          <Text>Dica</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text>Próximo</Text>
        </TouchableOpacity>
      </View>
      <BottomMenuStudent />
      {/* Modal de Dica */}
      <Modal visible={isModalOpen} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Dica</Text>
            <Text>Observe bem as cartas antes de começar!</Text>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MemoryGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  gameBoard: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: 360, // 3 colunas de 120px cada
  },
  card: {
    width: 100,
    height: 120,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  cardFlipped: {
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 20
  },
  button: {
    padding: 16,
    backgroundColor: colors.amarelo,
    borderRadius: 5,
    marginHorizontal: 10
  },
  message: {
    fontSize: 16,
    color: 'green',
    marginVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
