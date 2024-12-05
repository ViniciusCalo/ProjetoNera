import React, { useState, useEffect } from "react";
import axios from "axios";
import TipModal from '../TipModal'; 

function QuizGame() {
  const [questions, setQuestions] = useState([]); // Armazena as perguntas
  const [currentQuestion, setCurrentQuestion] = useState(0); // Índice da pergunta atual
  const [score, setScore] = useState(0); // Pontuação
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Resposta selecionada
  const [feedback, setFeedback] = useState(""); // Feedback textual
  const [isGameOver, setIsGameOver] = useState(false); // Indica se o jogo terminou
  const [isModalOpen, setIsModalOpen] = useState(false); 
  

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

  // Renderização inicial: carregando perguntas
  if (!questions.length) {
    return <p>Carregando perguntas...</p>;
  }

  // Renderização do final do jogo
  if (isGameOver) {
    return (
      <div>
        <h2>Jogo Finalizado!</h2>
        <p>Sua pontuação: {score}/{questions.length}</p>
      </div>
    );
  }

  const handleTip = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  const current = questions[currentQuestion];
  const options = [current.option_1, current.option_2, current.option_3, current.option_4];

  // Renderização da pergunta atual
  return (
    <div>
      <h1>{current.gamename}</h1>
      <h2>{current.question}</h2>
      <img src={current.img} alt="Questão relacionada" style={{ maxWidth: "300px" }} />
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              margin: "10px",
              padding: "10px",
              backgroundColor:
                selectedAnswer === option
                  ? option === current.is_correct
                    ? "green" // Resposta correta
                    : "red" // Resposta errada
                  : "white",
              color: "black",
              border: "1px solid #ccc",
              pointerEvents: selectedAnswer ? "none" : "auto", // Desativa os botões após responder
            }}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && <p>{feedback}</p>}
        <button onClick={handleNextQuestion} disabled={!selectedAnswer} style={{ marginTop: "20px", padding: "10px" }}>
          Próxima Pergunta
        </button>
        <button onClick={handleTip} style={{ marginTop: "20px", padding: "10px" }}>
          Dica
        </button>
        <TipModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default QuizGame;
