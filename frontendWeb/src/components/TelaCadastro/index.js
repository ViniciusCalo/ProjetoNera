import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'
import google from './img/google.svg'
import { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch';
import { setName } from '../../store/userSlice';

const TelaCadastro = () => {
  const navigate = useNavigate()
  const [toogle, setToogle] = React.useState(true);
  const [toogle2, setToogle2] = React.useState(true);
  const [cor1, setCor1] = React.useState('white');
  const [cor2, setCor2] = React.useState('white');
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirma, setSenhaConfirma] = useState('')
  const [role, setRole] = useState('student');
  const [cpf, setCPF] = useState('');
  const [nome, setNome] = useState("");


  const toggleProfile = () => {
    setRole((prevProfile) => (prevProfile === 'student' ? 'teacher' : 'student'));
  };

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
  const handleCPF = (e) => {
    setCPF(e.target.value)
  }
  const handleName = (e) => {
    setNome(e.target.value)
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

  const clearForm = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setRole('teacher');
    setCPF("");
  }


  const handleClick = async () => {
    if (senha === senhaConfirma) {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {
          username: nome,
          useremail: email,
          userpassword: senha,
          role: role,
          teachercpf: cpf

        });
        if (role === 'teacher') {
          navigate('/loginAluno');
      }

      if (role === 'student') {
          navigate('/loginProfessor')
      }
        clearForm();
      } catch (err) {
        console.log(err);
      }
    } else {
      setToogle(false)
      setToogle2(false)
      setSenha('')
      setSenhaConfirma('')
    }
  };

  return (
    <body>
      <C.Box>
        <C.Div>
          <C.Logo src={Logo} />
          <C.textEntrar>Tem uma conta?</C.textEntrar>
          <C.ButtonEntrar href='/loginAluno'>Entrar</C.ButtonEntrar>
        </C.Div>
        <C.Container>
          <C.FormLogin autocomplete="off">
            <C.Tituloform>Crie o seu perfil</C.Tituloform>
            <C.InputE onChange={handleName} id='name' type="text" placeholder="Nome do usuário" />
            <C.InputE onChange={handleEmail} id='email' type="text" placeholder="E-mail" />
            {role === "teacher" && (
              <C.InputE onChange={handleCPF} id='cpf' type="text" placeholder="CPF" />
            )}
            <C.DivButton>
              <C.InputS style={{ border: `2px solid ${cor1}` }} value={senha} onChange={handleSenha} id='senha' type="password" placeholder="Senha" />
              <C.InputS style={{ border: `2px solid ${cor2}` }} value={senhaConfirma} onChange={handleSenhaConfirma} id='senha2' type="password" placeholder="Confirmar Senha" />
            </C.DivButton>
            <ToggleSwitch
              width={'80%'}
              height={'8%'}
              onClick={toggleProfile}
              value={role}
            />
            <C.Button type='button' onClick={handleClick}>Criar Conta</C.Button>
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
    </body>
  );
};

export default TelaCadastro;