import React, { useState } from "react";
import * as C from './styles';
import logo from './img/Icone.png';
import user from './img/Vector_Perfil.svg';
import trilha from './img/Vector_Trilha.svg';
import join from './img/Vector_join.svg';
import sair from './img/Vector_Logout.svg';
import seta from './img/seta.svg';
import ModalEnterClass from '../ModalEnterClass/index';

const MenuLateral = () => {
  const [showModal, setShowModal] = useState(false);

  function limparLocal() {
    localStorage.clear();
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <C.Menu>
        <C.Lista>
          <C.Item1><C.Link><C.Icone src={logo} /></C.Link></C.Item1>
          <C.Item><C.Link href="/perfil"><C.Icone src={user} /><C.Texto>Perfil</C.Texto></C.Link></C.Item>
          <C.Item><C.Link href="/trilha"><C.Icone src={trilha} /><C.Texto>Trilhas</C.Texto></C.Link></C.Item>
          <C.Item><C.Link onClick={toggleModal}><C.Icone src={join} /><C.Texto>Entrar</C.Texto></C.Link></C.Item>
          <C.Item2><C.Link href="#"><C.Icone2 src={seta} /></C.Link></C.Item2>
          <C.Item3><C.Link href="/loginAluno" onClick={limparLocal}><C.Icone src={sair} /><C.Texto>Sair</C.Texto></C.Link></C.Item3>
        </C.Lista>
      </C.Menu>

      <ModalEnterClass isOpen={showModal} onRequestClose={toggleModal} />
    </>
  );
};

export default MenuLateral;
