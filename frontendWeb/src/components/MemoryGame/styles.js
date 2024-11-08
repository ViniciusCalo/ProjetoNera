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
  
  /* Define rotação quando isFlipped é verdadeiro */
  transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)')}; /* Adicione o ponto e vírgula aqui */
`;


export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid #034C8C;
  border-radius: 10px;
  backface-visibility: hidden; /* Garante que o verso fique escondido */
  position: absolute;
  top: 0;
  left: 0;

  /* Define a rotação do verso e da frente da carta */
  transform: ${props => (props.isBack ? 'rotateY(180deg)' : 'rotateY(0)')};
  transition: transform 0.6s ease; /* Suaviza a rotação */
`;

// Componentes restantes...

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #FFFFFF;
  box-sizing: border-box;
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
export const BtnVoltar = styled.button`
  background: transparent;
  border: none;
  width: 30%;
`;

export const CotainerModal = styled.div`
  margin-top: -10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ImgModal = styled.img`
  width: 20%;
  height: 20%;
`;

export const TituloModal = styled.h1`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 42px;
`;

export const TextoModal = styled.p`
  color: #000;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  line-height: 42px;
`;
