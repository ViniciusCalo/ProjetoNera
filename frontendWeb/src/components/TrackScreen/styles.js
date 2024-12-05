import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;
  margin-top: 130px;
  position: relative;

  @media (max-width: 480px) {
    margin-top: 100px; /* Ajusta a margem em telas menores */
      background-color: ${({ color }) => color || "transparent"};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconHeader = styled.img`
margin-top: 5%;
  width: 50px;
  margin-right: 10px;
     @media (max-width: 480px) {
     margin-top: 10%;
   }
`;

export const TitleHeader = styled.h1`
  margin-top: 5%;
  color: #135794;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
   @media (max-width: 480px) {
     margin-top: 10%;
   }
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto; /* Permite rolagem horizontal */
  overflow-y: hidden;
  width: 80%; /* Define o carrossel como 100% da tela */
  scroll-snap-type: x mandatory; /* Centraliza o item ativo */
  scroll-behavior: smooth; /* Animação suave na rolagem */
gap: 5%;

  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem */
  }

  @media (max-width: 480px) {
    width: 100%; /* Carrossel ocupa toda a largura */
    gap: 0; /* Remove espaçamento entre itens */
  }
`;



export const CarouselItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  min-width: ${({ size }) => (size === 'large' ? '200px' : '150px')};
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  scroll-snap-align: center;


  @media (max-width: 480px) {
    width: 100%; /* Cada item ocupa toda a largura da tela */
    min-width: 50px; /* Garante largura fixa em telas pequenas */
    flex-shrink: 0; /* Impede que os itens diminuam */
  }
`;



export const TitleTrilha = styled.h2`
  color: #888585;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  text-align: center;
     @media (max-width: 480px) {
     margin-top: 5%;
     font-size: 20px;
     
     }
`;

export const ImgTrilha = styled.img`
  width: ${({ size }) => (size === 'large' ? '210px' : '170px')};
  height: ${({ size }) => (size === 'large' ? '210px' : '170px')};
  margin-bottom: 10px;
  transition: width 0.3s ease, height 0.3s ease, transform 0.3s ease;

   @media (max-width: 480px) {
     width: ${({ size }) => (size === 'large' ? '210px' : '210px')};
    height: ${({ size }) => (size === 'large' ? '210px' : '210px')};
    
   }

`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  img {
    width: 40px; /* Ajuste o tamanho da seta */
    height: 40px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &:hover {
    transform: scale(1.1);
  }
`;
