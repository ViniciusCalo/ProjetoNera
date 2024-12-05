import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Button } from "react-native";
import BottomMenuStudent from '../../components/MenuStudent';
import colors from '../../components/styles'
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import FractionTrails from "./FractionTrails";

const QuizGame = () => {
  const navigation = useNavigation();
  const [questions, setQuestions] = useState([]); // Armazena as perguntas
  const [currentQuestion, setCurrentQuestion] = useState(0); // Índice da pergunta atual
  const [score, setScore] = useState(0); // Pontuação
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Resposta selecionada
  const [feedback, setFeedback] = useState(""); // Feedback textual
  const [isGameOver, setIsGameOver] = useState(false); // Indica se o jogo terminou
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado do modal

  // Busca as perguntas da API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3333/quizgame/"); // Substitua pela URL real da API
        setQuestions(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados da API:", error);
      }
    };
    fetchQuestions();
  }, []);


  const newGame = () => {
    setIsGameOver(false);
    setFeedback("");
    setSelectedAnswer(null);
    setCurrentQuestion(0);
    navigation.navigate(FractionTrails)
  }


  // Lida com a seleção da resposta
  const handleAnswer = (selectedOption) => {
    const current = questions[currentQuestion];
    setSelectedAnswer(selectedOption); // Marca a resposta selecionada
    if (selectedOption === current.is_correct) {
      setScore(score + 1);
      setFeedback("Correto!");
    } else {
      setFeedback(`Errado! Resposta correta: ${current.is_correct}`);
    }
  };

  // Avança para a próxima pergunta
  const handleNextQuestion = () => {
    setFeedback("");
    setSelectedAnswer(null); // Limpa a seleção
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsGameOver(true); // Fim do jogo
    }
  };

  const handleTip = () => {
    setIsModalOpen(true); // Abre o modal de dica
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal de dica
  };

  // Renderização inicial: carregando perguntas
  if (!questions.length) {
    return (
      <View style={styles.centered}>
        <Text>Carregando perguntas...</Text>
      </View>
    );
  }

  // Renderização do final do jogo
  if (isGameOver) {
    return (
      <View style={styles.centered}>
        <Text style={styles.title}>Jogo Finalizado!</Text>
        <Text style={styles.text}>Sua pontuação: {score}/{questions.length}</Text>
        <Button title="Trilhas" onPress={() => newGame()} style={{backgroundColor: '#007BFF'}}/>
      </View>
    );
  }

  const current = questions[currentQuestion];
  const options = [current.option_1, current.option_2, current.option_3, current.option_4];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{current.gamename}</Text>
      <Text style={styles.question}>{current.question}</Text>
      <Image source={{ uri: current.img }} style={styles.image} />
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(option)}
            style={[
              styles.optionButton,
              selectedAnswer === option && {
                backgroundColor: option === current.is_correct ? "green" : "red",
              },
            ]}
            disabled={!!selectedAnswer} // Desativa os botões após a resposta
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}
      <TouchableOpacity
        onPress={handleNextQuestion}
        disabled={!selectedAnswer}
        style={[
          styles.nextButton,
          { backgroundColor: selectedAnswer ? "#007BFF" : "#ccc" },
        ]}
      >
        <Text style={styles.buttonText}>Próxima Pergunta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTip} style={styles.tipButton}>
        <Text style={styles.buttonText}>Dica</Text>
      </TouchableOpacity>

      {/* Modal de Dica */}
      <Modal
        visible={isModalOpen}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Dica</Text>
            <Text style={styles.modalText}>A resposta correta é: {current.is_correct}</Text>
            <Button title="Fechar" onPress={closeModal} />
          </View>
        </View>
      </Modal>
      <BottomMenuStudent />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  question: {
    fontSize: 18,
    marginVertical: 16,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 16,
  },
  optionsContainer: {
    marginBottom: 16,
  },
  optionButton: {
    padding: 13,
    marginVertical: 8,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
  },
  optionText: {
    textAlign: "center",
    fontSize: 16,
  },
  feedback: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
  nextButton: {
    padding: 13,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  tipButton: {
    padding: 16,
    backgroundColor: colors.amarelo,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 16,
  },
});

export default QuizGame;
