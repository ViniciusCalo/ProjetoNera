import React, { useState } from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import RoomDetailsModal from '../RoomDetailsModal';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/classroomSlice';
import axios from 'axios';

Modal.setAppElement('#root');

const EnterClassModal = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const [token] = useState(localStorage.getItem('token'));
  const [roomCode, setRoomCode] = useState("");
  const [showRoomDetails, setShowRoomDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [classroom, setClassroom] = useState({});

  const handleRoomCodeChange = (e) => {
    setRoomCode(e.target.value);
    setErrorMessage("");
  };

  const closeRoomDetails = () => {
    setShowRoomDetails(false);
    onRequestClose();
  };

  // Função para entrar na sala utilizando API método PUT /student/joinClassroom
  const joinClass = async (e) => {
    e.preventDefault();
    if (!roomCode) {
      setErrorMessage("Por favor, insira o código da sala.");
      return;
    }

    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/student/joinClassroom`, {
        tokenclass: roomCode,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      setClassroom(res.data.result);
      dispatch(addItem(res.data.result));
      setShowRoomDetails(true);
      clearForm();
    } catch (error) {
      setErrorMessage("Não foi possível entrar na sala. Verifique o código e tente novamente.");
      console.error(error.response?.data || error.message);
    }
  };

  // Clear form function
  const clearForm = () => {
    setRoomCode('');
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Entrar na Sala"
        classroom={classroom}
        idtrail={classroom.trackid}
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
        {errorMessage && <C.ErrorMessage>{errorMessage}</C.ErrorMessage>}
        <C.Button onClick={joinClass}>Entrar</C.Button>
      </Modal>

      <RoomDetailsModal 
        isOpen={showRoomDetails} 
        onRequestClose={closeRoomDetails} 
        classroom={classroom} // Adicionando a prop classroom
      />
    </>
  );
};

export default EnterClassModal;
