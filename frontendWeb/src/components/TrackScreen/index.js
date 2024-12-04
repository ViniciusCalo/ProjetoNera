import React, { useRef, useState, useEffect } from 'react';
import * as C from './styles';
import trilha from './img/trilha.svg';
import dir from './img/dir.svg'; // Ícone da seta direita
import esq from './img/esq.svg'; // Ícone da seta esquerda
import { useSelector } from 'react-redux';


const TrackScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const trilhas = useSelector((state) => state.trails);

  const activeColor = trilhas[activeIndex]?.color || "transparent"

  const calculateItemWidth = () => {
    if (carouselRef.current) {
      return carouselRef.current.offsetWidth; // Largura real do carrossel
    }
    return 200; // Valor padrão, caso o ref ainda não esteja definido
  };
  
  useEffect(() => {
    document.body.style.backgroundColor = `${activeColor}33`; // Adiciona transparência
    return () => {
      document.body.style.backgroundColor = ""; // Reseta ao desmontar
    };
  }, [activeColor]);

  useEffect(() => {
    if (carouselRef.current && window.innerWidth <= 480) { // Apenas em telas pequenas
      const itemWidth = calculateItemWidth(); // Calcula a largura dinamicamente
      carouselRef.current.scrollTo({
        left: activeIndex * itemWidth,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);
  

  
  

const scrollLeft = () => {
  if (activeIndex > 0) {
    const itemWidth = calculateItemWidth(); // Largura dinâmica
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      carouselRef.current.scrollTo({
        left: newIndex * itemWidth, // Calcula o deslocamento
        behavior: "smooth",
      });
      return newIndex;
    });
  }
};

const scrollRight = () => {
  if (activeIndex < trilhas.length - 1) {
    const itemWidth = calculateItemWidth(); // Largura dinâmica
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      carouselRef.current.scrollTo({
        left: newIndex * itemWidth, // Calcula o deslocamento
        behavior: "smooth",
      });
      return newIndex;
    });
  }
};

  
  
  

  return (
    <>
      <C.Header>
        <C.IconHeader src={trilha} />
        <C.TitleHeader>Trilhas</C.TitleHeader>
      </C.Header>

      <C.Container >
        <C.ArrowButton onClick={scrollLeft}>
          <img src={esq} alt="Seta para esquerda" />
        </C.ArrowButton>
        <C.Carousel ref={carouselRef}>
          {trilhas.map((trilha, index) => (
            <C.CarouselItem
              key={trilha.id}
              href={index === activeIndex ? "/module" : undefined} // Só habilita o link para o item ativo
              active={index === activeIndex}
              index={index} // Passa o índice atual do item
              size={index === activeIndex ? "large" : "normal"}
            >
              <C.ImgTrilha src={trilha.image} />
              <C.TitleTrilha>Trilha de {trilha.name}</C.TitleTrilha>
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
