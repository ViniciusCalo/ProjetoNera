import React from "react";
import * as C from './styles'
import logo from './img/Icone.png'
import home from './img/Vector_Home.svg'
import createClass from './img/Vector_CreateClass.svg'
import salas from './img/Vector_ClassRoom.svg'
import sair from './img/Vector_Logout.svg'
import seta from './img/seta.svg'




const MenuLateral = () => {
  function limparLocal() {
    localStorage.clear();
  }

  return (
    <C.Menu >
      <C.Lista>
        <C.Item1><C.Link ><C.Icone src={logo} /></C.Link></C.Item1>
        <C.Item><C.Link href="/perfilProf"><C.Icone src={home} /><C.Texto>Home</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="/createClass"><C.Icone src={createClass} /><C.Texto>Criar</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="/teacherClass"><C.Icone src={salas} /><C.Texto>Salas</C.Texto></C.Link></C.Item>
        <C.Item2><C.Link href="#"><C.Icone2 src={seta} /></C.Link></C.Item2>
        <C.Item3><C.Link href="/loginAluno" onClick={limparLocal}><C.Icone src={sair} /><C.Texto>Sair</C.Texto></C.Link></C.Item3>
      </C.Lista>
    </C.Menu>
  );
};

export default MenuLateral