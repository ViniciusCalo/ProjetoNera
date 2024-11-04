import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 170px;
    position: relative;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `

  export const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  `

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

