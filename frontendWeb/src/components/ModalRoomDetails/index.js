import React from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import classPink from './img/classPink.png';
import TrailCard from '../TrailCard';
import fracaoicon from './img/fracao.svg';
//Redux
import { useSelector } from 'react-redux'

const ModalRoomDetails = ({ isOpen, onRequestClose, classroom, idtrail }) => {

  const trail = useSelector((state) => 
    state.trails.find((t) => t.id === idtrail)
);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalhes da Sala"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'relative',
          inset: 'auto',
          borderRadius: '20px',
          width: '400px',
          maxWidth: '90%',
          height: '500px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        },
      }}
    >
      <C.BackButton onClick={onRequestClose}></C.BackButton>
      <C.Header>
        <img src={classPink} alt="Icone da Sala" />
        <div>
          <C.RoomTitle>{classroom?.classroomname || "Carregando..."}</C.RoomTitle>
          <C.TeacherBadge>{classroom?.teacherUsername || "Professor não informado"}</C.TeacherBadge>
        </div>
      </C.Header>
      <C.Description>
        {classroom?.classroomdescription || "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </C.Description>
      <C.SectionTitle>Trilha da Sala</C.SectionTitle>
      <C.ModuleCard>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        {trail ? (
                <TrailCard key={trail.id} titulo={trail.name} image={trail.image} color={trail.color} />
            ) : (
              <TrailCard titulo="Fração" image={fracaoicon} color="#F20574" />
            )}
          
        </div>
      </C.ModuleCard>
      <C.StartButton>Iniciar</C.StartButton>
    </Modal>
  );
};

export default ModalRoomDetails;
