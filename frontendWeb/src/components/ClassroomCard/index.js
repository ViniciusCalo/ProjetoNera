import React, { useState } from 'react';
import * as C from './styles'; // Importando o arquivo CSS
import ClassInfoModal from '../ClassInfoModal';
import RoomDetailsModal from '../RoomDetailsModal'; // Importar o novo modal

// Redux
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ClassroomCard = ({ titulo, trailId, role, classroom }) => {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);
  const [isTeacherModalOpen, setIsTeacherModalOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false); // Para abrir o modal do aluno
  const trail = useSelector((state) =>
    state.trails.find((t) => t.id === trailId)
  );

  // Lógica ao clicar no card
  const handleCardClick = () => {
    if (role === 'teacher') {
      setIsTeacherModalOpen(true); // Exibe o modal para o professor
    } else if (role === 'student') {
      setIsStudentModalOpen(true); // Exibe o modal para o aluno
    }
  };

  const handleModalClose = () => {
    setIsTeacherModalOpen(false);
    setIsStudentModalOpen(false);
  };

  // Lógica para navegar para o jogo da memória
  const handleMemoryGame = (e) => {
    e.stopPropagation(); // Evita o disparo do evento do card ao clicar no botão
    navigate('/memorygame'); // Substitua pela rota correta do jogo da memória
  };

  return (
    <>
      <C.Card onClick={handleCardClick}>
        <C.IconeSala color={trail?.color}>
          {trail ? (
            <C.IconImage src={trail.image} alt={`Ícone da sala ${trail.name}`} />
          ) : (
            <p>Trilha não encontrada</p>
          )}
        </C.IconeSala>
        <C.Title>{titulo}</C.Title>
        {role === 'teacher' ? (
          <C.Info>
            <C.UserIcon />
            <C.TextoInfo>{classroom.studentCount || 0} Alunos</C.TextoInfo>
          </C.Info>
        ) : (
          <>
            <C.SubTitle>{trail?.name}</C.SubTitle>
            <C.Button onClick={handleMemoryGame}>Jogar Novamente</C.Button>
          </>
        )}
      </C.Card>

      {/* Modal para o professor */}
      {role === 'teacher' && (
        <ClassInfoModal
          idTrail={trailId}
          classroom={classroom}
          isOpen={isTeacherModalOpen}
          setModalVisible={() => setIsTeacherModalOpen(false)} // Passa o estado correto
          onRequestClose={() => setIsTeacherModalOpen(false)} // Alinha com clique fora ou ESC
        />

      )}

      {/* Modal para o aluno */}
      {role === 'student' && (
        <RoomDetailsModal
          classroom={classroom}
          isOpen={isStudentModalOpen}
          onRequestClose={handleModalClose}
        />
      )}
    </>
  );
};

export default ClassroomCard;
