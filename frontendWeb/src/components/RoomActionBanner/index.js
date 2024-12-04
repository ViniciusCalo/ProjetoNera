import React from 'react';
import * as C from './styles'; // Importa os estilos
import { useNavigate } from 'react-router-dom'; // Para navegação

const RoomActionBanner = ({ role, openModal }) => {
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    navigate('/createClassroom'); // Redireciona para a rota de criação de sala
  };

  const handleJoinRoom = () => {
    openModal(); // Chama a função para abrir o modal
  };

  return (
    <C.BannerContainer>
      <C.BannerTitle>Nenhuma sala disponível</C.BannerTitle>
      <C.BannerText>
        {role === 'teacher'
          ? 'Você ainda não criou uma sala. Clique no botão abaixo para criar uma nova sala.'
          : 'Você ainda não está em nenhuma sala. Clique no botão abaixo para entrar em uma sala.'}
      </C.BannerText>
      <C.BannerButton
        onClick={role === 'teacher' ? handleCreateRoom : handleJoinRoom}
      >
        {role === 'teacher' ? 'Criar Nova Sala' : 'Entrar na Sala'}
      </C.BannerButton>
    </C.BannerContainer>
  );
};

export default RoomActionBanner;
