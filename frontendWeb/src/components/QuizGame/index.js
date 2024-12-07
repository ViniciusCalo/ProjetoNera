import React, { useState, useEffect } from "react";
import axios from "axios";
import * as C from './styles';
import TipModal from '../TipModal';
import iconreload from '../../assets/reload.png';
import tip from '../../assets/tip.png';
import next from '../../assets/next.png';

function QuizGame() {
  const [questions, setQuestions] = useState([]); // Armazena as perguntas
  const [currentQuestion, setCurrentQuestion] = useState(0); // Índice da pergunta atual
  const [score, setScore] = useState(0); // Pontuação
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Resposta selecionada
  const [feedback, setFeedback] = useState(""); // Feedback textual
  const [isGameOver, setIsGameOver] = useState(false); // Indica se o jogo terminou
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Busca as perguntas da API
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/quizgame/`); // Substitua pela URL real da API
      setQuestions(response.data);
    } catch (error) {
      console.error("Erro ao carregar os dados da API:", error);
    }
  };

  useEffect(() => {
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
    return (
      <C.LoadingContainer>
        <C.Spinner /> {/* Animação de carregamento */}
        <C.LoadingText>Carregando o perguntas...</C.LoadingText>
      </C.LoadingContainer>
    );
  }

  // Renderização do final do jogo
  if (isGameOver) {
    return (
      <C.Game>
        <C.GameOverContainer>
          <C.FunIllustration src="/path/to/congrats.png" alt="Parabéns!" />
          <C.GameOverTitle>Jogo Finalizado!</C.GameOverTitle>
          <C.ScoreText>
            Sua pontuação: <strong>{score}</strong> de {questions.length}
          </C.ScoreText>
        </C.GameOverContainer>
      </C.Game>
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
    <>
      <C.Header>
        <C.Titulo>MODULO I - Frações</C.Titulo>
      </C.Header>
      <C.Game>
        <C.GameContainer>
          <C.Title>{current.gamename}</C.Title>
          <C.GameBoard>
            <C.Enunciado>{current.question}</C.Enunciado>
            <C.OptionImage src={current.img} alt="Questão relacionada" />
            <C.Options>
              {options.map((option, index) => (
                <C.OptionButton
                  key={index}
                  isSelected={selectedAnswer === option}
                  isCorrect={option === current.is_correct}
                  onClick={() => handleAnswer(option)}
                  disabled={!!selectedAnswer} // Desativa os botões após responder
                >
                  {option}
                </C.OptionButton>
              ))}
            </C.Options>

            <C.FeedbackBanner
              isCorrect={feedback === 'Correto!'}
              visible={!!feedback}
            >
              {feedback}
            </C.FeedbackBanner>

          </C.GameBoard>
          <C.ContainerMenu>
            <C.BtnTip onClick={handleTip}>
              <C.IconTip src={tip} alt='Dica' />
              <span>Dica</span>
            </C.BtnTip>

            <C.BtnNext disabled={!selectedAnswer} onClick={handleNextQuestion}>
              <C.iconButton src={next} alt='Próximo' />
              <span>Próximo</span>
            </C.BtnNext>
          </C.ContainerMenu>
        </C.GameContainer>
      </C.Game>

      {/* Componente ModalDica */}
      <TipModal isOpen={isModalOpen}  gameType={"quizgame"} onRequestClose={closeModal} />
    </>
  );
}

export default QuizGame;
