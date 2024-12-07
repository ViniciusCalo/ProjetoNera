import React from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import seta from './img/set.svg';
import iconCopiar from './img/copy.png';
import iconCompartilhar from './img/share.png';
import TrackCard from '../TrackCard';
// Redux
import { useSelector } from 'react-redux';

Modal.setAppElement('#root');

const ClassInfoModal = ({ idTrail, classroom, isOpen, setModalVisible }) => {
  const trail = useSelector((state) =>
    state.trails.find((t) => t.id === idTrail)
  );

  const copyToClipboard = () => {
    navigator.clipboard.writeText(classroom.tokenclass);
    alert("Código copiado!");
  };

  const shareCode = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Código da Sala',
          text: `Aqui está o código da sala: ${classroom.tokenclass}`,
        })
        .catch((error) => console.error('Erro ao compartilhar:', error));
    } else {
      alert(
        'A funcionalidade de compartilhamento não é suportada neste dispositivo.'
      );
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalVisible(false)} // Garante que o modal feche com clique fora ou ESC
      contentLabel="Informações da Sala"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          borderRadius: '20px',
          width: '90%',
          maxWidth: '400px',
          height: 'auto',
          padding: '0',
          inset: 'auto',
          fontFamily: 'Roboto, sans-serif',
        },
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>
        <C.BtnVoltar onClick={() => setModalVisible(false)}> {/* Garanta que a função está sendo passada */}
          <C.iconButton src={seta} alt="Voltar" />
        </C.BtnVoltar>
      </div>


      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
          <div style={{ position: 'relative', marginRight: '20px' }}>
            {trail ? (
              <img
                src={trail.image}
                alt="Imagem da sala"
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  border: '2px solid #ddd',
                }}
              />
            ) : (
              <p>Trilha não encontrada</p>
            )}
          </div>

          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '22px', color: '#F29F05', margin: '0', fontWeight: 'bold' }}>
              {classroom.classroomname}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
              <p style={{ fontSize: '16px', color: '#007bff', margin: '0 10px' }}>
                {classroom.tokenclass}
              </p>
              <img
                src={iconCopiar}
                alt="Copiar código"
                style={{ width: '20px', height: '20px', margin: '0 5px', cursor: 'pointer' }}
                onClick={copyToClipboard}
              />
              <img
                src={iconCompartilhar}
                alt="Compartilhar"
                style={{ width: '20px', height: '20px', margin: '0 5px', cursor: 'pointer' }}
                onClick={shareCode}
              />
            </div>
          </div>
        </div>

        {/* Descrição */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '14px', color: '#555', fontFamily: 'Roboto, sans-serif' }}>
            {classroom.classroomdescription}
          </p>
        </div>

        {/* Trilha */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: '15px' }}>
          <C.SectionTitle>Trilha da Sala</C.SectionTitle>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {trail ? (
              <TrackCard titulo={trail.name} image={trail.image} color={trail.color} />
            ) : (
              <p>Trilha não encontrada.</p>
            )}
          </div>
        </div>

        {/* Alunos */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <C.SectionTitle>Alunos</C.SectionTitle>
          <p style={{ fontSize: '16px', color: '#007bff', fontWeight: 'bold' }}>
            {classroom.totalStudents} alunos nesta sala
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ClassInfoModal;
