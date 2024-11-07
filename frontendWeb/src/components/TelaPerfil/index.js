// src/components/TelaPerfil/index.js
import React, { useState, useRef, useEffect } from 'react';
import * as C from './styles';
import { AiTwotoneEdit } from "react-icons/ai";
import imgPerfil from './img/user.svg';
import ClassroomCard from '../ClassroomCard';
import setaEsquerda from './img/setaEsquerda.svg'; // Imagem da seta para a esquerda
import setaDireita from './img/setaDireita.svg'; // Imagem da seta para a direita
import ModalEditPerfil from '../ModalEditPerfil/index';
import axios from 'axios';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/classroomSlice';

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


const componentMapping = {
  Card1: C.Card1,
  Card: C.Card,
};

const TelaPerfil = () => {
  //Redux
  const dispatch = useDispatch();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const { name, profileImageUrl } = useSelector((state) => state.user);

  const [modalIsOpen, setIsOpen] = useState(false);
  const carrouselRef = useRef(null);
  const carrouselRef2 = useRef(null);


  useEffect(() => {
    const getItems = async () => {
      if (token) { // Verifica se o token está definido
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/student/classrooms`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log(res.data.classrooms);
          dispatch(setItems(res.data.classrooms));
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Token não encontrado");
      }
    };

    getItems();
  }, [dispatch, token]);

  const items = useSelector((state) => state.classrooms.items || []);

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
        <C.imgPerfil src={profileImageUrl ? profileImageUrl : imgPerfil} alt="Imagem de perfil" />
        <div>
          <C.User>@{name}</C.User>
          <C.Name>{name}</C.Name>
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
        {items.length > 0 && (
            <C.CarrouselButton onClick={scrollLeft}>
              <C.IconSeta src={setaEsquerda} alt="Seta Esquerda" />
            </C.CarrouselButton>
          )}
          <C.Carrousel ref={carrouselRef}>
            {items.length > 0 ? (
              items.map(item => (
                <ClassroomCard key={item.classroomid} titulo={item.classroomname} trailId={item.trackid} />
              ))
            ) : (
              <div className="empty-message">
                Nenhuma sala disponível. <a href="/createClass">Clique aqui</a> para entrar em um nova sala.
              </div>
            )}
          </C.Carrousel>
          {items.length > 0 && (
            <C.CarrouselButton onClick={scrollRight}>
              <C.IconSeta src={setaDireita} alt="Seta Direita" />
            </C.CarrouselButton>
          )}
        </C.CarrouselContainer>
      </C.ContainerC>

      <ModalEditPerfil isOpen={modalIsOpen} onRequestClose={fecharModal} />
    </C.Container>
  );
};

export default TelaPerfil;
