import React, { useState } from "react";
import * as C from './styles';
import logo from '../../assets/Icone.png';
import user from './img/Vector_Perfil.svg';
import trilha from './img/Vector_Trilha.svg';
import join from './img/Vector_join.svg';
import sair from './img/Vector_Logout.svg';
import seta from './img/seta.svg';
import { useNavigate } from 'react-router-dom';
import EnterClassModal from '../EnterClassModal/index';
import { setItems } from '../../store/classroomSlice';
import { logout } from '../../store/userSlice';
import { useDispatch } from 'react-redux';

const SideMenuStudent = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutsite() {
    localStorage.clear();
    dispatch(logout());
    dispatch(setItems([]));
    navigate('/studentLogin')
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <C.Menu>
        <C.Lista>
          <C.Item1><C.Link><C.Icone src={logo} /></C.Link></C.Item1>
          <C.Item><C.Link href="/studentProfile"><C.Icone src={user} /><C.Texto>Perfil</C.Texto></C.Link></C.Item>
          <C.Item><C.Link href="/track"><C.Icone src={trilha} /><C.Texto>Trilhas</C.Texto></C.Link></C.Item>
          <C.Item><C.Link onClick={toggleModal}><C.Icone src={join} /><C.Texto>Entrar</C.Texto></C.Link></C.Item>
          <C.Item2><C.Link href="#"><C.Icone2 src={seta} /></C.Link></C.Item2>
          <C.Item3><C.Link onClick={logoutsite}><C.Icone src={sair} /><C.Texto>Sair</C.Texto></C.Link></C.Item3>
        </C.Lista>
      </C.Menu>

      <EnterClassModal isOpen={showModal} onRequestClose={toggleModal} />
    </>
  );
};

export default SideMenuStudent;
