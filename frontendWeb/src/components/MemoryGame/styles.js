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
  @media (max-width: 480px) {
    height: 90vh;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10%;
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 5%;
    font-size: 20px;
  }
`;

export const Message = styled.h2`
  font-size: 1.5rem;
  margin-top: 20px;
  color: green;
  height: 50vh;
`;

export const GameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    max-width: 300px;
  }
`;

export const Card = styled.div`
  width: 100px;
  height: 140px;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 10px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')};
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid #034C8C;
  border-radius: 10px;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => (props.isBack ? 'rotateY(180deg)' : 'rotateY(0)')};
  transition: transform 0.6s ease;
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #FFFFFF;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
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
    width: 60%;
    margin: 10px;
    height: 80%;
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


export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ocupa toda a altura da tela */
  background-color: #f5f5f5; /* Fundo claro */
`;

export const LoadingText = styled.h2`
  font-family: 'Roboto', sans-serif;
  color: #135794; /* Azul escuro */
  font-size: 20px;
  margin-top: 20px;
`;

export const Spinner = styled.div`
  border: 8px solid #f3f3f3; /* Cor do fundo */
  border-top: 8px solid #135794; /* Cor do destaque */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const RestartButton = styled(Botao)`
  background: #ffaa33; /* Cor laranja */
  color: white;
  font-weight: bold;

  &:hover {
    background: #ff8800; /* Cor laranja mais escura no hover */
  }
`;

