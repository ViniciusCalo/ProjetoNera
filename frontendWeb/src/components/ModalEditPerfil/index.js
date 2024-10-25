import React, { useState } from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import seta from './img/set.svg';
import imgPerfil from './img/user.svg';
import editIconImg from './img/edit.svg';
import cameraIconImg from './img/camera.svg';

Modal.setAppElement('#root');

const ModalEditPerfil = ({ isOpen, onRequestClose }) => {
  const [userName, setUserName] = useState(localStorage.getItem("usuario") || "");
  const [isEditingName, setIsEditingName] = useState(false);
  const [profileImage, setProfileImage] = useState(imgPerfil);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const toggleEditingName = () => {
    setIsEditingName(!isEditingName);
  };

  const handleNameSubmit = (e) => {
    if (e.key === "Enter") {
      setIsEditingName(false);
      localStorage.setItem("usuario", userName);
    }
  };

  const changeProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar Perfil"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          borderRadius: '20px',
          width: '50%',
          maxWidth: '600px',
          height: 'auto',
          maxHeight: '90%',
          padding: '0',
          inset: 'auto',
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #ccc' }}>
        <C.BtnVoltar onClick={onRequestClose}>
          <C.iconButton src={seta} alt="Voltar" />
        </C.BtnVoltar>
        <h2 style={{ flex: 1, textAlign: 'center', margin: '0', fontWeight: 'bold', fontFamily: 'Roboto' }}>Perfil</h2>
      </div>

      <div style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
        <div style={{ position: 'relative' }}>
          <img
            src={profileImage}
            alt="Imagem de perfil"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '2px solid #ddd',
            }}
          />
          <label htmlFor="file-input" style={{ position: 'absolute', bottom: '10px', right: '-10px', cursor: 'pointer' }}>
            <img src={cameraIconImg} alt="Trocar foto" style={{ width: '20px', height: '20px' }} />
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={changeProfileImage}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          {isEditingName ? (
            <C.EditNameInput
              type="text"
              value={userName}
              onChange={handleNameChange}
              onKeyDown={handleNameSubmit}
              onBlur={() => setIsEditingName(false)}
              autoFocus
            />
          ) : (
            <>
              <C.UserName>{userName}</C.UserName>
              <img
                src={editIconImg}
                alt="Editar nome"
                style={{ marginLeft: '10px', cursor: 'pointer', width: '20px', height: '20px' }}
                onClick={toggleEditingName}
              />
            </>
          )}
        </div>
      </div>

      <div style={{ marginTop: '5px', width: '90%', alignSelf: 'left', padding: '20px' }}>
        <C.SectionTitle>Notificações</C.SectionTitle>
        <div
          style={{
            backgroundColor: '#f7f7f7',
            padding: '15px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
            width: '100%',
            minHeight: '100px',
            overflow: 'visible',
          }}
        >
          <C.NotificationText>Aqui ficam as notificações do usuário</C.NotificationText>
          <C.NotificationButton>ver mais</C.NotificationButton>
        </div>
      </div>
    </Modal>
  );
};

export default ModalEditPerfil;
