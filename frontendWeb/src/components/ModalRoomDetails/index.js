import React from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import classPink from './img/classPink.png'; 
import TrailCard from '../TrailCard'; 
import fracaoicon from './img/fracao.svg';

const ModalRoomDetails = ({ isOpen, onRequestClose }) => {
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
          <C.RoomTitle>6º Ano A</C.RoomTitle>
          <C.TeacherBadge>Nome professor</C.TeacherBadge>
        </div>
      </C.Header>
      <C.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </C.Description>
      <C.SectionTitle>Trilha da Sala</C.SectionTitle>
      <C.ModuleCard>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TrailCard titulo="Fração" image={fracaoicon} color="#F20574" />
     </div>
      </C.ModuleCard>
      <C.StartButton>Iniciar</C.StartButton>
    </Modal>
  );
};

export default ModalRoomDetails;
