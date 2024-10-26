import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 130px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const IconHeader = styled.img`
  width: 50px;
  margin-right: 10px;
`;

export const TitleHeader = styled.h1`
  color: #135794;
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
`;

export const Carousel = styled.div`
  display: flex;
  overflow: hidden;
  width: 80%;
  justify-content: center;
  gap: 30px;
`;

export const CarouselItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  min-width: ${({ size }) => (size === 'large' ? '200px' : '150px')};
  transition: min-width 0.3s ease, opacity 0.3s ease;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
`;

export const TitleTrilha = styled.h2`
  color: #888585;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  text-align: center;
`;

export const ImgTrilha = styled.img`
  width: ${({ size }) => (size === 'large' ? '210px' : '170px')};
  height: ${({ size }) => (size === 'large' ? '210px' : '170px')};
  margin-bottom: 10px;
  transition: width 0.3s ease, height 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
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
