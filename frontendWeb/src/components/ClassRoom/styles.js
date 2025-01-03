import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";


// Container principal
export const Container = styled.div`
  width: 90vw; /* Ocupa toda a largura da viewport */
  min-height: 100vh; /* Ocupa toda a altura da viewport */
  margin: 0 auto; /* Centraliza o conteúdo */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; /* Garante que o padding seja incluído no cálculo da largura */
`;

// Container das seções
export const ContainerC = styled.div`
  width: 100%;
  max-width: 1100px; /* Largura máxima para alinhar com o conteúdo */
  margin: 30px auto; /* Centraliza o conteúdo */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%; /* Acompanha a largura total dos cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 5px;
  
`;

export const Line = styled.div`
  width: 90%; /* Largura definida em relação ao contêiner de cards */
  max-width: 1100px; /* Limita a largura para o tamanho máximo dos cards */
  height: 3px;
  background-color: #f29f05; /* Cor da linha */
  margin: 0 auto;
`;

// Container para grid de cards
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 colunas fixas */
  gap: 20px;
  width: 90%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 4 colunas para telas menores */
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas para tablets */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas para telas menores */
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr); /* 1 coluna para celulares */
  }
`;

// Estilos para o Card de Sala de Aula
export const Card = styled.div`
  width: 180px;
  height: 240px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  cursor: pointer;

     @media (max-width: 480px) {
     
    }
`;

export const IconeSala = styled.div`
  width: 80px;
  height: 80px;
  background: #ff007f; /* Cor de fundo do ícone */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const IconImage = styled.img`
  width: 50%;
  height: 50%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 5px 10px;
  width: 80%;
  justify-content: center;
`;

export const UserIcon = styled(FaUserAlt)`
  color: #135794;
  margin-right: 8px;
`;

export const TextoInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

// Estilos para o Modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  position: relative;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ModalTitle = styled.h3`
  font-size: 24px;
  margin: 0 0 10px;
  font-family: 'Roboto', sans-serif;
`;

export const ModalBody = styled.div`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;
