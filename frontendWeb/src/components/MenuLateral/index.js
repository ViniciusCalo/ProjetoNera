import React from "react";
import * as C from './styles'
import logo from './img/Icone.png'
import user from './img/Vector_Perfil.svg'
import trilha from './img/Vector_Trilha.svg'
import his from './img/Vector_Historico.svg'
import noti from './img/Vector_Notificacao.svg'
import conf from './img/Vector_Configuracoes.svg'
import ajuda from './img/Vector_duvidas.svg'
import sair from './img/Vector_Logout.svg'
import seta from './img/seta.svg'




const MenuLateral = () => {
  function limparLocal(){
    localStorage.clear();
  }

  return (
    <C.Menu >
      <C.Lista>
        <C.Item><C.Link ><C.Icone src={logo} /></C.Link></C.Item>
        <C.Item><C.Link href="/perfil"><C.Icone src={user} /><C.Texto>Perfil</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="/trilha"><C.Icone src={trilha} /><C.Texto>Trilhas</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="#"><C.Icone src={his} /><C.Texto>Historico</C.Texto></C.Link></C.Item>
        <C.Item2><C.Link href="#"><C.Icone2 src={seta} /></C.Link></C.Item2>
        <C.Item><C.Link href="#"><C.Icone src={noti} /><C.Texto>Notificacao</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="#"><C.Icone src={ajuda} /><C.Texto>Ajuda</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="#"><C.Icone src={conf} /><C.Texto>Configuração</C.Texto></C.Link></C.Item>
        <C.Item><C.Link href="/loginAluno" onClick={limparLocal}><C.Icone src={sair} /><C.Texto>Sair</C.Texto></C.Link></C.Item>
      </C.Lista>
    </C.Menu>
  );
};

export default MenuLateral