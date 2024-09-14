import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'
import google from './img/google.svg'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const TelaLoginAluno = () => {
  const nav = useNavigate()
  const [sessao, setSesao] = useState([])
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handleSenha = (e) => {
  setSenha(e.target.value)
}


const handleVerificarUsuario = async () => {
  var body = {
    "email": email,
    "senha": senha
}
try {
    const uri = process.env.REACT_APP_API_URL || "http://localhost:3001";
    const response = await axios.post(`${uri}/usuario/login`, body)
    setSesao(response.data.message);
    console.log(sessao)
    localStorage.setItem('usuario', email);
    nav('/perfil')
} catch (err) {
    console.log(err);
    alert("senha e/ou email incorreto")
}
}

  return (
    <C.Box>
        <C.Logo src={Logo}/>
        <C.Container>
        <C.DivButton>
        <C.ButtonAlu>Estudante</C.ButtonAlu>
          <C.ButtonProf href='/loginProfessor'>Professor</C.ButtonProf>
        </C.DivButton>
        <C.FormLogin autocomplete="off">
        <C.InputE id='email' onChange={handleEmail} type="text" placeholder="E-mail ou nome do usuário"/>
        <C.InputS id='senha' onChange={handleSenha} type="password" placeholder="Senha"/>
        <C.div>
            <C.Link>Esqueci minha senha?</C.Link>
        </C.div>
        <C.Button type='button' onClick={handleVerificarUsuario}>Entrar</C.Button>
        <C.DivLinha>
            <C.linha1></C.linha1>
            ou
            <C.linha2></C.linha2>
        </C.DivLinha>
        <C.ButtonG><C.icon src={google} />Login com Google</C.ButtonG>
        <C.ButtonC href='/cadastro' >Criar Conta</C.ButtonC>
        </C.FormLogin>
        </C.Container>
    </C.Box>
  );
};

export default TelaLoginAluno;