import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: right;
  align-items: end;
  height: auto;
  width: 100%;
  top: 10px;
  right: 5%;
`;

export const Titulo = styled.h1`
  color: #000;
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;



export const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;  
    @media (max-width: 768px) {
    height: 90vh;
    padding: 5px;
  }      
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura em telas menores */
    padding: 5px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;\
  margin-bottom: 2%;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 5%;
    font-size: 20px;
  }
`;

export const Enunciado = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  text-aling: center;
  font-weight: 400;
  font-size: 35px;
  line-height: 42px;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 5%;
    font-size: 20px;
  }
`;

export const GameBoard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const Options = styled.div`
width: 100%;
display: flex;
justify-content: space-around;

  @media (max-width: 480px) {

  }

`;
export const OptionImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 5%;
  @media (max-width: 480px) {
     margin: 10%;

  }`
;
export const OptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* Ajuste conforme necessário */
  height: 100px; /* Ajuste conforme necessário */
  font-size: 24px;
  border: 2px solid ${({ isSelected, isCorrect }) =>
    isSelected ? (isCorrect ? "#4CAF50" : "#FF5252") : "#000"};
  border-radius: 10px;
  background-color: ${({ isSelected, isCorrect }) =>
    isSelected ? (isCorrect ? "#E8F5E9" : "#FFCDD2") : "#FFF"};
  color: ${({ isSelected }) => (isSelected ? "#000" : "#333")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:hover {
    transform: scale(1.05);
  }

    @media (max-width: 480px) {
       width: 50px; /* Ajuste conforme necessário */
      height: 80px;
  }
`;


export const FeedbackBanner = styled.div`
  background-color: ${({ isCorrect }) => (isCorrect ? '#d4edda' : '#f8d7da')};
  color: ${({ isCorrect }) => (isCorrect ? '#155724' : '#721c24')}; 
  border: 1px solid ${({ isCorrect }) => (isCorrect ? '#c3e6cb' : '#f5c6cb')};
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')}; /* Reserva o espaço */
  opacity: ${({ visible }) => (visible ? 1 : 0)}; /* Controla a opacidade */
  transition: opacity 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #FFFFFF;
  border-radius: 10px;
  position: static;
  padding: 10px;
  bottom: 0;
  @media (max-width: 480px) {
    margin-top: 5px;
  }
`;

export const Botao = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  height: 70px;
  width: 200px;
  border-radius: 20px;
  background: rgba(92, 178, 235, 0.22);
  border: none;
  font-size: 20px;
  @media (max-width: 480px) {
    width: 30%;
    margin: 10px;
    span {
      display: none;
    }
  }
`;

export const iconButton = styled.img`
  width: 25%;
  flex-shrink: 0;
  margin-right: 10px;
  padding: 5px;
  @media (max-width: 480px) {
    width: 50%;
    margin-right: 0;
  }
`;

export const IconTip = styled(iconButton)`
  width: 30%;
  @media (max-width: 480px) {
    width: 50%;
  }
`;

export const BtnReload = styled(Botao)``;
export const BtnNext = styled(Botao)``;
export const BtnTip = styled(Botao)``;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
`;

export const CloseButton = styled.button`
  background: #034C8C;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

export const TituloModal = styled.h1`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
`;

export const TextoModal = styled.p`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  line-height: 24px;
`;

export const LampIcon = styled.img`
  cursor: pointer;
  margin-left: 10px;
  width: 30px;
  height: 30px;
`;

export const GameOverContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff8e5; /* Fundo claro */
  border: 2px solid #ffaa33; /* Contorno laranja */
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
`;

export const GameOverTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #135794; /* Azul escuro */
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ScoreText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-size: 18px;
  margin-bottom: 20px;
`;


export const FunIllustration = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;
