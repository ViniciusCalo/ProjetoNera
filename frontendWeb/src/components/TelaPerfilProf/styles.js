import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const imgPerfil = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const User = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const Name = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #555;
`;

export const ButtonEditar = styled.button`
  margin-top: 10px;
  background-color: #135794;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const ContainerC = styled.div`
  width: 100%;
  margin: 30px 0;
      @media (max-width: 1200px) {
        width: 80%;
    }
    @media (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #f29f05;
  padding-bottom: 10px;
`;

export const CarrouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const CarrouselButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

export const IconSeta = styled.img`
  width: 24px;
  height: 24px;
`;

export const Carrousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 15px;
  padding: 10px;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    flex: 0 0 auto;
  }
`;

export const Trilhas = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  width: 100%;
`;
