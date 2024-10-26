import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'
import google from './img/google.svg'
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const TelaCadastro = () => {
  const nav = useNavigate()
  const [toogle, setToogle] = React.useState(true);
  const [toogle2, setToogle2] = React.useState(true);
  const [cor1, setCor1] = React.useState('white');
  const [cor2, setCor2] = React.useState('white');
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirma, setSenhaConfirma] = useState('')

  useEffect(() => {
    if (toogle === false) {
        setCor1('#D42E3F')
    }
    if (toogle2 === false) {
        setCor2('#D42E3F')
    }
}, [toogle, toogle2])

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSenha = (e) => {
    setSenha(e.target.value)
    setToogle(true)
    setCor1('white')
    setToogle2(true)
    setCor2('white')
  }

  const handleSenhaConfirma = (e) => {
    setSenhaConfirma(e.target.value)
    setToogle2(true)
    setCor2('white')
    setToogle(true)
    setCor1('white')
  }

  const handleCadastrarUsuario = async () => {
    if (senha === senhaConfirma) {
      var body = {
        "email": email,
        "senha": senha
      }
      try {
        const uri = process.env.REACT_APP_API_URL || "http://localhost:3001"; 
        const response = await axios.post(`${uri}/usuario/cadastrar`, body)
        console.log(response.data.message)
        nav('/loginAluno')
      } catch (err) {
        console.log(err);
      }
    }else{
      setToogle(false)
      setToogle2(false)
      setSenha('')
      setSenhaConfirma('')
    }

  }

  return (
    <C.Box>
      <C.Div>
        <C.Logo src={Logo} />
        <C.textEntrar>Tem uma conta?</C.textEntrar>
        <C.ButtonEntrar href='/loginAluno'>Entrar</C.ButtonEntrar>
      </C.Div>
      <C.Container>
        <C.FormLogin autocomplete="off">
          <C.Tituloform>Crie o seu perfil</C.Tituloform>
          <C.InputE onChange={handleEmail} id='email' type="text" placeholder="E-mail ou nome do usuário" />
          <C.DivButton>
            <C.InputS style={{ border: `2px solid ${cor1}` }}  value={senha} onChange={handleSenha} id='senha' type="password" placeholder="Senha" />
            <C.InputS style={{ border: `2px solid ${cor2}` }} value={senhaConfirma} onChange={handleSenhaConfirma} id='senha2' type="password" placeholder="Confirmar Senha" />
          </C.DivButton>
          <C.Button type='button' onClick={handleCadastrarUsuario}>Criar Conta</C.Button>
          <C.DivLinha>
            <C.linha1></C.linha1>
            ou
            <C.linha2></C.linha2>
          </C.DivLinha>
          <C.ButtonG><C.icon src={google} />Login com Google</C.ButtonG>
          <C.Text>Ao entrar no N.E.R.A., você concorda com os nossos Termos e Política de Privacidade.</C.Text>
        </C.FormLogin>
      </C.Container>
    </C.Box>
  );
};

export default TelaCadastro;