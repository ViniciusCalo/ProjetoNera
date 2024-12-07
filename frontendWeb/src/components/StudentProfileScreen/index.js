// src/components/TelaPerfil/index.js
import React, { useState, useRef, useEffect } from 'react';
import * as C from './styles';
import { AiTwotoneEdit } from "react-icons/ai";
import imgPerfil from '../../assets/user.svg';
import ClassroomCard from '../ClassroomCard';
import setaEsquerda from './img/setaEsquerda.svg'; // Imagem da seta para a esquerda
import setaDireita from './img/setaDireita.svg'; // Imagem da seta para a direita
import EditProfileModal from '../EditProfileModal/index';
import EnterClassModal from '../EnterClassModal/index';
import RoomActionBanner from '../RoomActionBanner';
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

const StudentProfileScreen = () => {
  //Redux
  const dispatch = useDispatch();
  const { name, profileImageUrl, token } = useSelector((state) => state.user);

  const [modalIsOpen, setIsOpen] = useState(false);
  const carrouselRef = useRef(null);
  const carrouselRef2 = useRef(null);

  const [showModal, setShowModal] = useState(false);


  function toggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    const getItems = async () => {
      if (token) { // Verifica se o token está definido
        try {
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/student/classroom`, {
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
            <C.CarrouselButton onClick={scrollLeft2}>
              <C.IconSeta src={setaEsquerda} alt="Seta Esquerda" />
            </C.CarrouselButton>
          )}
          <C.Carrousel ref={carrouselRef2}>
            {items.length > 0 ? (
              items.map(item => (
                <ClassroomCard key={item.classroomid} titulo={item.classroomname} trailId={item.trackid} />
              ))
            ) : (
              <RoomActionBanner
                role="student"
                openModal={toggleModal} // Função passada para abrir o modal
              />

            )}
          </C.Carrousel>
          {items.length > 0 && (
            <C.CarrouselButton onClick={scrollRight2}>
              <C.IconSeta src={setaDireita} alt="Seta Direita" />
            </C.CarrouselButton>
          )}
        </C.CarrouselContainer>
      </C.ContainerC>

      <EditProfileModal isOpen={modalIsOpen} onRequestClose={fecharModal} />
      <EnterClassModal isOpen={showModal} onRequestClose={toggleModal} />
    </C.Container>

  );
};

export default StudentProfileScreen;
