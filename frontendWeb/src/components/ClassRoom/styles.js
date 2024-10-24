import styled, { createGlobalStyle } from "styled-components";
import { FaUserAlt } from "react-icons/fa";

// Global Style para garantir que o fundo cubra todo o body
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f0f4ff; /* Fundo azul claro aplicado no body */
  }
`;

// Container principal
export const Container = styled.div`
  width: 100vw; /* Ocupa toda a largura da viewport */
  min-height: 100vh; /* Ocupa toda a altura da viewport */
  margin: 0 auto; /* Centraliza o conteúdo */
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f4ff; /* Fundo azul claro */
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
  width: 100%;

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
    grid-template-columns: repeat(1, 1fr); /* 1 coluna para celulares */
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
