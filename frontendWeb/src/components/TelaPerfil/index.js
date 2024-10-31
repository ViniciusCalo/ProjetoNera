// src/components/TelaPerfil/index.js
import React, { useState, useRef } from 'react';
import * as C from './styles';
import { AiTwotoneEdit } from "react-icons/ai";
import imgPerfil from './img/user.svg';
import ClassroomCard from '../ClassroomCard';
import setaEsquerda from './img/setaEsquerda.svg'; // Imagem da seta para a esquerda
import setaDireita from './img/setaDireita.svg'; // Imagem da seta para a direita
import ModalEditPerfil from '../ModalEditPerfil/index';

const conquistas = [
  { id: 1, tipo: 'Card1', titulo: 'Explorador de frações' },
  { id: 2, tipo: 'Card', titulo: 'Explorador de frações' },
  { id: 3, tipo: 'Card1', titulo: 'Explorador de frações' },
  { id: 4, tipo: 'Card', titulo: 'Explorador de frações' },
  { id: 5, tipo: 'Card1', titulo: 'Explorador de frações' },
  { id: 6, tipo: 'Card', titulo: 'Explorador de frações' },
  { id: 7, tipo: 'Card1', titulo: 'Explorador de frações' },
  { id: 8, tipo: 'Card', titulo: 'Explorador de frações' },
  { id: 9, tipo: 'Card1', titulo: 'Explorador de frações' },
];

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' }
];

const componentMapping = {
  Card1: C.Card1,
  Card: C.Card,
};

const TelaPerfil = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const carrouselRef = useRef(null);
  const carrouselRef2 = useRef(null);

  const abrirModal = () => setIsOpen(true);
  const fecharModal = () => setIsOpen(false);

  const scrollLeft = () => {
    carrouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carrouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };
  const scrollLeft2 = () => {
    carrouselRef2.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight2 = () => {
    carrouselRef2.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <C.Container>
      <C.Infos>
        <C.imgPerfil src={imgPerfil} alt="Imagem de perfil" />
        <div>
          <C.User>@{localStorage.getItem("usuario")}</C.User>
          <C.Name>{localStorage.getItem("usuario")}</C.Name>
        </div>
        <C.ButtonEditar onClick={abrirModal}>
          <AiTwotoneEdit /> Editar Perfil
        </C.ButtonEditar>
      </C.Infos>

      <C.ContainerC>
        <C.Title>Conquistas</C.Title>
        <C.CarrouselContainer>
          <C.CarrouselButton onClick={scrollLeft}>
            <C.IconSeta src={setaEsquerda} alt="Seta Esquerda" />
          </C.CarrouselButton>
          <C.Carrousel ref={carrouselRef}>
            {conquistas.map((conquista) => {
              const Componente = componentMapping[conquista.tipo];
              return (
                <C.DivConquista key={conquista.id}>
                  <Componente />
                  <C.textConquistado>{conquista.titulo}</C.textConquistado>
                </C.DivConquista>
              );
            })}
          </C.Carrousel>
          <C.CarrouselButton onClick={scrollRight}>
            <C.IconSeta src={setaDireita} alt="Seta Direita" />
          </C.CarrouselButton>
        </C.CarrouselContainer>
      </C.ContainerC>

      <C.ContainerC>
        <C.Title>Minhas salas</C.Title>
        <C.CarrouselContainer>
          <C.CarrouselButton2 onClick={scrollLeft2}>
            <C.IconSeta src={setaEsquerda} alt="Seta Esquerda" />
          </C.CarrouselButton2>
          <C.Carrousel2 ref={carrouselRef2}>
          {data.map(item => (
              <ClassroomCard key={item.id} titulo={item.title} />
            ))}
          </C.Carrousel2>
          <C.CarrouselButton2 onClick={scrollRight2}>
            <C.IconSeta src={setaDireita} alt="Seta Direita" />
          </C.CarrouselButton2>
        </C.CarrouselContainer>
      </C.ContainerC>

      <ModalEditPerfil isOpen={modalIsOpen} onRequestClose={fecharModal} />
    </C.Container>
  );
};

export default TelaPerfil;
