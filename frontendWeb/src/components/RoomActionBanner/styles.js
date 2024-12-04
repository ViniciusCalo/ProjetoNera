import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff8e5; /* Fundo claro */
  border: 2px solid #ffaa33; /* Contorno */
  border-radius: 15px;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */

  @media (max-width: 480px) {
    padding: 20px;
    max-width: 90%; /* Responsivo em telas menores */
  }
`;

export const BannerIcon = styled.img`
  width: 80px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 60px; /* Ícone menor em telas pequenas */
  }
`;

export const BannerTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BannerText = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #555;
  margin-bottom: 20px;
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 12px; /* Texto menor em telas pequenas */
  }
`;

export const BannerButton = styled.button`
  background: #ffaa33;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #ff8800; /* Efeito hover */
  }

  @media (max-width: 480px) {
    padding: 8px 16px; /* Botão menor em telas pequenas */
    font-size: 14px;
  }
`;
