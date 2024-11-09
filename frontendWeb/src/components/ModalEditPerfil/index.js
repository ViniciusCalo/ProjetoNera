import React, { useState } from 'react';
import Modal from 'react-modal';
import * as C from './styles';
import seta from './img/set.svg';
import editIconImg from './img/edit.svg';
import cameraIconImg from './img/camera.svg';
import iconUser from './img/user.svg';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setName, setProfileImageUrl } from '../../store/userSlice';
import axios from 'axios';


Modal.setAppElement('#root');

const ModalEditPerfil = ({ isOpen, onRequestClose }) => {
  //Redux
  const dispatch = useDispatch();
  const [token] = useState(localStorage.getItem('token'));
  const { name, profileImageUrl } = useSelector((state) => state.user);
  const [userName, setUserName] = useState(name);
  const [isEditingName, setIsEditingName] = useState(false);
  const [profileImage, setProfileImage] = useState(profileImageUrl);

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const toggleEditingName = () => {
    setIsEditingName(!isEditingName);
  };

  const handleNameSubmit = (e) => {
    if (e.key === "Enter") {
      setIsEditingName(false);
      dispatch(setName(e.target.value));
    }
  };

  // Função para atualizar imagem do user do redux utilizando api
  const updateProfile = async (uriImagem) => {
    try {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/users/uploadpic`, {
            profilepicture: uriImagem
        },
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
        console.log(res.data);
        dispatch(setProfileImageUrl(uriImagem));
    } catch (err) {
        console.log(err);
    }
}
  

  const changeProfileImage = async (e) => {
    const selectedImage = e.target.files[0];
    
    // Chama a função de upload automaticamente ao selecionar o arquivo
    if (selectedImage) {
        await uploadImageToAzure(selectedImage);
    }
  };

  const uploadImageToAzure = async (selectedImage) => {
    if (!selectedImage) return alert("Selecione uma imagem para enviar.");

    // Defina o SAS token e a URL base do Blob Storage
    const sasToken = process.env.REACT_APP_SAS_TOKEN;
    const blobBaseUrl = process.env.REACT_APP_AZURE_STORAGE_URL;

    try {
        // Crie um nome único para o blob
        const blobName = new Date().getTime() + "-" + name;
        const signedUrl = `${blobBaseUrl}/${blobName}?${sasToken}`;

        // Convertendo o arquivo de imagem para um Blob binário
        const formData = new FormData();
        formData.append("file", selectedImage);

        // Opções para a requisição
        const options = {
            headers: {
                'Content-Type': selectedImage.type,
                'x-ms-blob-type': 'BlockBlob',
            },
        };

        // Fazer upload da imagem com `axios` usando FormData
        const response = await axios.put(signedUrl, selectedImage, options);

        if (response.status === 201) {
            console.log("Imagem enviada com sucesso:", signedUrl);
            setProfileImage(signedUrl);
            //dispatch(setProfileImageUrl(signedUrl))
            await updateProfile(signedUrl);
            console.log("Imagem enviada com sucesso!");
        } else {
            console.error("Falha ao enviar a imagem.");
        }
    } catch (error) {
        console.error("Erro ao enviar a imagem:", error);
        alert("Falha ao enviar a imagem.");
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
        <div style={{ position: 'relative', width: '120px',
              height: '120px',
              borderRadius: '50%',
              border: '1px solid #ddd', }}>
            <img
            src={profileImage ? profileImage : iconUser}
            alt="Imagem de perfil"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
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