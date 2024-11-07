import React, { useState, useRef, useEffect } from 'react';
import * as C from './styles';
import { AiTwotoneEdit } from "react-icons/ai";
import imgPerfil from './img/user.png';
import setaEsquerda from './img/setaEsquerda.svg';
import setaDireita from './img/setaDireita.svg';
import ModalEditPerfil from '../ModalEditPerfil'; // Importar o modal
import ClassroomCard from '../ClassroomCard';
import TrailCard from '../TrailCard';
import axios from 'axios';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/classroomSlice';

const TelaPerfil = () => {
  //Redux
  const dispatch = useDispatch();
  const token = useState(localStorage.getItem('token'));
  const { name } = useSelector((state) => state.user);
  const trails = useSelector((state) => state.trails);

  const [modalIsOpen, setIsOpen] = useState(false);
  const carrouselRef = useRef(null);
  const carrouselRef2 = useRef(null);

  useEffect(() => {
    const getItems = async () => {
      if (token) { // Verifica se o token está definido
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/classrooms/teacher`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          console.log(res.data);
          dispatch(setItems(res.data));
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
        <C.imgPerfil src={imgPerfil} alt="Imagem de perfil" />
        <div>
          <C.User>@{name}</C.User>
          <C.Name>{name}</C.Name>
        </div>
        <C.ButtonEditar onClick={abrirModal}>
          <AiTwotoneEdit /> Editar Perfil
        </C.ButtonEditar>
      </C.Infos>

      <C.ContainerC>
        <C.Title>Salas de Aula</C.Title>
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
                Nenhuma sala disponível. <a href="/createClass">Clique aqui</a> para criar uma nova sala.
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

      <C.ContainerC>
        <C.Title>Trilhas</C.Title>
        <C.CarrouselContainer>
          <C.CarrouselButton2 onClick={scrollLeft2}>
            <C.IconSeta src={setaEsquerda} alt="Seta Esquerda" />
          </C.CarrouselButton2>
          <C.Carrousel2 ref={carrouselRef2}>
            {trails.map(item => (
              <TrailCard key={item.id} titulo={item.name} image={item.image} color={item.color} />
            ))}
          </C.Carrousel2>
          <C.CarrouselButton2 onClick={scrollRight2}>
            <C.IconSeta src={setaDireita} alt="Seta Direita" />
          </C.CarrouselButton2>
        </C.CarrouselContainer>
      </C.ContainerC>

      {/* Modal para edição de perfil */}
      <ModalEditPerfil isOpen={modalIsOpen} onRequestClose={fecharModal} />
    </C.Container>
  );
}

export default TelaPerfil;
