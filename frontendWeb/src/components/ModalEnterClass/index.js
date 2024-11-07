import React, { useState } from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import ModalRoomDetails from '../ModalRoomDetails';

Modal.setAppElement('#root');

const ModalEnterClass = ({ isOpen, onRequestClose }) => {
  const [roomCode, setRoomCode] = useState("");
  const [showRoomDetails, setShowRoomDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
    setErrorMessage("");
  };

  const handleEnter = () => {
    if (!roomCode) {
      setErrorMessage("Por favor, insira o código da sala.");
      return;
    }

    const validCode = "12345"; 
    if (roomCode !== validCode) {
      setErrorMessage("O código digitado está incorreto.");
      return;
    }

    setShowRoomDetails(true);
  };

  const closeRoomDetails = () => {
    setShowRoomDetails(false);
    onRequestClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Entrar na Sala"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
          content: {
            borderRadius: '20px',
            width: '400px',
            maxWidth: '90%',
            height: '300px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            inset: 'auto',
            margin: 'auto',
          },
        }}
      >
        <C.Input
          type="text"
          placeholder="Digite o código da sala"
          value={roomCode}
          onChange={handleRoomCodeChange}
        />
        {errorMessage && <C.ErrorMessage>{errorMessage}</C.ErrorMessage>} {/* Exibe a mensagem de erro */}
        <C.Button onClick={handleEnter}>Entrar</C.Button>
      </Modal>

      <ModalRoomDetails isOpen={showRoomDetails} onRequestClose={closeRoomDetails} />
    </>
  );
};

export default ModalEnterClass;
