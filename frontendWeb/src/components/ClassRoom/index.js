import React, { useState, useEffect } from 'react';
import * as C from './styles';
import ClassroomCard from '../ClassroomCard';
import ClassInfoModal from '../ClassInfoModal';
import { useSelector } from 'react-redux';
import RoomActionBanner from '../RoomActionBanner';

const Classroom = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  // Consumindo o Redux
  const items = useSelector((state) => state.classrooms.items || []);

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
                studentCount={item.studentCount} // Passa o studentCount diretamente
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
