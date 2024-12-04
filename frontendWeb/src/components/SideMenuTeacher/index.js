import React from "react";
import * as C from './styles'
import logo from './img/Icone.png'
import home from './img/Vector_Home.svg'
import createClass from './img/Vector_CreateClass.svg'
import salas from './img/Vector_ClassRoom.svg'
import sair from './img/Vector_Logout.svg'
import seta from './img/seta.svg'
import { useDispatch } from 'react-redux';
import { setItems } from '../../store/classroomSlice';
import { setName, setProfileImageUrl } from '../../store/userSlice';




const SideMenuTeacher = () => {
  const dispatch = useDispatch();

  function limparLocal() {
    localStorage.clear();
    dispatch(setItems([]));
    dispatch(setName(""))
    dispatch(setProfileImageUrl(""))
  }

  return (
    <C.Menu >
      <C.Lista>
        <C.Item1><C.Link ><C.Icone src={logo} /></C.Link></C.Item1>
        <C.Item><C.Link href="/teacherProfile"><C.Icone src={home} /><C.Texto>Home</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="/createClassroom"><C.Icone src={createClass} /><C.Texto>Criar</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="/teacherClass"><C.Icone src={salas} /><C.Texto>Salas</C.Texto></C.Link></C.Item>
        <C.Item2><C.Link href="#"><C.Icone2 src={seta} /></C.Link></C.Item2>
        <C.Item3><C.Link href="/teacherLogin" onClick={limparLocal}><C.Icone src={sair} /><C.Texto>Sair</C.Texto></C.Link></C.Item3>
      </C.Lista>
    </C.Menu>
  );
};

export default SideMenuTeacher