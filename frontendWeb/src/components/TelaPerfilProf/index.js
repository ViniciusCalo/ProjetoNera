import React, { useState, useRef } from 'react';
import * as C from './styles';
import { AiTwotoneEdit } from "react-icons/ai";
import imgPerfil from './img/user.png';
import setaEsquerda from './img/setaEsquerda.svg';
import setaDireita from './img/setaDireita.svg';
import ModalEditPerfil from '../ModalEditPerfil'; // Importar o modal
import ClassroomCard from '../ClassroomCard';
import TrailCard from '../TrailCard';

const TelaPerfil = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const carrouselRef = useRef(null);

  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
    { id: '11', title: 'Item 11' },
  ];

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
        <C.Title>Salas de Aula</C.Title>
        <C.CarrouselContainer>
          <C.CarrouselButton onClick={scrollLeft}>
            <C.IconSeta src={setaEsquerda} alt="Seta Esquerda" />
          </C.CarrouselButton>
          <C.Carrousel ref={carrouselRef}>
            {data.map(item => (
              <ClassroomCard key={item.id} titulo={item.title} />
            ))}
          </C.Carrousel>
          <C.CarrouselButton onClick={scrollRight}>
            <C.IconSeta src={setaDireita} alt="Seta Direita" />
          </C.CarrouselButton>
        </C.CarrouselContainer>
      </C.ContainerC>

      <C.ContainerC>
        <C.Title>Trilhas</C.Title>
        <C.Trilhas>
          {/* Exemplo de cartões de trilhas */}
          <TrailCard />
          <TrailCard />
          <TrailCard />
          <TrailCard />
          <TrailCard />
        </C.Trilhas>
      </C.ContainerC>

      {/* Modal para edição de perfil */}
      <ModalEditPerfil isOpen={modalIsOpen} onRequestClose={fecharModal} />
    </C.Container>
  );
}

export default TelaPerfil;
