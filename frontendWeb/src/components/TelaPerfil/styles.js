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
       @media (min-width: 480px) {
 align-items: center;
    justify-content: center;
    }

`;

export const CarrouselButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const CarrouselButton2 = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
     @media (min-width: 480px) {
display: none;
    }
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
export const Carrousel2 = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 10px;
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

export const DivConquista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  scroll-snap-align: center;
`;

export const Card = styled.article`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f29f05;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card1 = styled(Card)`
  background-color: #f20574;
`;

export const textConquistado = styled.p`
  font-family: 'Roboto', sans-serif;
  margin-top: 8px;
  font-size: 14px;
  color: #888;
  text-align: center;
`;

export const ContainerE = styled.div`
  width: 100%;
  margin: 30px 0;
`;

export const TitleE = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #f29f05;
  padding-bottom: 10px;
`;

export const InfoE = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CardE = styled.div`
  width: 45%;
  margin-bottom: 20px;
  border: 2px solid #f29f05;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const DivIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #f29f05;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const icon = styled.img`
  width: 25px;
`;

export const DivText = styled.div`
  margin-left: 15px;
`;

export const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #f29f05;
  font-weight: bold;
`;

export const Text2 = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`;
