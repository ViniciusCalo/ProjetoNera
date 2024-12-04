import React, { useRef, useState } from 'react';
import * as C from './styles';
import trilha from './img/trilha.svg';
import fracao from './img/fracao.svg';
import porct from './img/porcentagem.svg';
import geo from './img/geometria.svg';
import expre from './img/expressao.svg';
import matri from './img/matrizes.svg';
import dir from './img/dir.svg'; // Ícone da seta direita
import esq from './img/esq.svg'; // Ícone da seta esquerda

const trilhas = [
  { id: 1, img: fracao, title: 'Trilha de Frações' },
  { id: 2, img: porct, title: 'Trilha de Porcentagem' },
  { id: 3, img: geo, title: 'Trilha de Geometria' },
  { id: 4, img: matri, title: 'Trilha de Matrizes' },
  { id: 5, img: expre, title: 'Trilha de Expressão' }
];

const TrackScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < trilhas.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <C.Header>
        <C.IconHeader src={trilha} />
        <C.TitleHeader>Trilhas</C.TitleHeader>
      </C.Header>

      <C.Container>
        <C.ArrowButton onClick={scrollLeft}>
          <img src={esq} alt="Seta para esquerda" />
        </C.ArrowButton>
        <C.Carousel ref={carouselRef}>
          {trilhas.map((trilha, index) => (
            <C.CarouselItem
              key={trilha.id}
              href="/module"
              active={index === activeIndex}
              size={index === activeIndex ? "large" : "normal"}
            >
              <C.ImgTrilha src={trilha.img} />
              <C.TitleTrilha>{trilha.title}</C.TitleTrilha>
            </C.CarouselItem>
          ))}
        </C.Carousel>
        <C.ArrowButton onClick={scrollRight}>
          <img src={dir} alt="Seta para direita" />
        </C.ArrowButton>
      </C.Container>
    </>
  );
}

export default TrackScreen;
