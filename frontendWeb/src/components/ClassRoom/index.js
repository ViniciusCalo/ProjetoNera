import React, { useState, useEffect } from 'react';
import * as C from './styles';
import ClassroomCard from '../ClassroomCard';
import ClassInfoModal from '../ClassInfoModal';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from '../../store/classroomSlice';
import RoomActionBanner from '../RoomActionBanner';
import axios from 'axios';

const Classroom = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const token = localStorage.getItem('token');
  const items = useSelector((state) => state.classrooms.items || []);

  useEffect(() => {
    const getItems = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${process.env.REACT_APP_API_URL}/classrooms/teacher`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          dispatch(setItems(res.data));
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Token não encontrado");
      }
    };

    getItems();
  }, [dispatch, token]);

  const handleCardClick = (classroom) => {
    setSelectedClassroom(classroom); // Define a sala selecionada
    setModalVisible(true); // Abre o modal
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedClassroom(null); // Limpa a sala selecionada ao fechar o modal
  };

  return (
    <C.Container>
      <C.ContainerC>
        <C.TitleContainer>
          <C.Title>Minhas Salas de Aula</C.Title>
          <C.Line />
        </C.TitleContainer>
        <C.GridContainer>
          {items.length > 0 ? (
            items.map((item) => (
              <ClassroomCard
                key={item.classroomid}
                role="teacher"
                titulo={item.classroomname}
                classroom={item}
                trailId={item.trackid}
                onCardClick={() => handleCardClick(item)} // Passa a função de clique
              />
            ))
          ) : (
            <RoomActionBanner role="teacher" openModal={null} />
          )}
        </C.GridContainer>
      </C.ContainerC>

      {/* Modal de informações */}
      {selectedClassroom && (
        <ClassInfoModal
          isOpen={modalVisible}
          setModalVisible={() => setModalVisible(false)}
          classroom={selectedClassroom}
          idTrail={selectedClassroom.trackid}
          onRequestClose={closeModal}
        />
      )}

    </C.Container>
  );
};

export default Classroom;
