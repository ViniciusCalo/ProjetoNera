// src/components/TelaPerfil/index.js
import React, { useState, useRef } from 'react';
import * as C from './styles';
import { AiTwotoneEdit } from "react-icons/ai";
import imgPerfil from './img/user.svg';
import icon1 from './img/icon1.svg';
import icon2 from './img/icon2.svg';
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

const experiencias = [
  { id: 1, icon: icon1, titulo: 'Nivel Básico', pontos: '500 pontos' },
  { id: 2, icon: icon2, titulo: 'Erros Simples', pontos: '-30 pontos' },
  { id: 3, icon: icon1, titulo: 'Nivel Avançado', pontos: '500 pontos' },
  { id: 4, icon: icon2, titulo: 'Erros Duplos', pontos: '-30 pontos' },
];

const componentMapping = {
  Card1: C.Card1,
  Card: C.Card,
};

const TelaPerfil = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const carrouselRef = useRef(null);

  const abrirModal = () => setIsOpen(true);
  const fecharModal = () => setIsOpen(false);

  const scrollLeft = () => {
    carrouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carrouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
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

      <C.ContainerE>
        <C.TitleE>Experiência</C.TitleE>
        <C.InfoE>
          {experiencias.map((exp) => (
            <C.CardE key={exp.id}>
              <C.DivIcon><C.icon src={exp.icon} alt="Ícone" /></C.DivIcon>
              <C.DivText>
                <C.Text>{exp.titulo}</C.Text>
                <C.Text2>{exp.pontos}</C.Text2>
              </C.DivText>
            </C.CardE>
          ))}
        </C.InfoE>
      </C.ContainerE>

      <ModalEditPerfil isOpen={modalIsOpen} onRequestClose={fecharModal} />
    </C.Container>
  );
};

export default TelaPerfil;
