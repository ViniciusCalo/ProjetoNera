import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 100px;
    position: relative;
    background: ${({ color }) =>
    `radial-gradient(circle at top right, ${color}, #fff 40%)`};
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  `

export const polygon = styled.div`
   width: 50%; /* Largura total do pentágono */
  height: 50%; /* Altura total do pentágono */
  background-color: #FFF; /* Cor de fundo do pentágono */
  clip-path: polygon(50% 0%, 100% 38%, 81% 100%, 19% 100%, 0% 38%);
  position: 'absolute';
  right: 0;
  top: '5%';
   
`
export const img = styled.img`
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 8,
    marginBottom: 8,
    `

export const title = styled.p`
      fontSize: 16,
      fontWeight: 'bold',
  `
