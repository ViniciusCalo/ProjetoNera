import React from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import classPink from './img/classPink.png';
import TrackCard from '../TrackCard';
import fracaoicon from './img/fracao.svg';
import { useNavigate } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const RoomDetailsModal = ({ isOpen, onRequestClose, classroom, idtrail }) => {
  const navigate = useNavigate();
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
                <TrackCard key={trail.id} titulo={trail.name} image={trail.image} color={trail.color} />
            ) : (
              <TrackCard titulo="Fração" image={fracaoicon} color="#F20574" />
            )}
          
        </div>
      </C.ModuleCard>
      <C.StartButton  onClick={() => navigate("/memoryGame")}>Iniciar</C.StartButton>
    </Modal>
  );
};

export default RoomDetailsModal;
