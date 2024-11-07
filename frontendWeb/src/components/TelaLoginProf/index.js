import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'
import google from './img/google.svg'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName, setProfileImageUrl } from '../../store/userSlice';



const TelaLoginProf = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [cpf, setCpf] = useState('')
  const role = "teacher"

  const createProfile = (username, userpicture) => {
    dispatch(setName(username));
    dispatch(setProfileImageUrl(userpicture));
};

const storeData = async (value) => {
  try {
      localStorage.setItem('token', value);
  } catch (e) {
      // saving error
  }
};


const handleEmail = (e) => {
  setEmail(e.target.value)
}

const handleSenha = (e) => {
  setSenha(e.target.value)
}
const handleCPF = (e) => {
  setCpf(e.target.value)
}
    // Clear form function
    const clearForm = () => {
      setEmail('');
      setSenha('');
      setCpf('');
  };

const login = async (e) => {
  e.preventDefault();
  console.log(apiUrl);
  console.log(role);
  try {
      const res = await axios.post(`${apiUrl}/users/login`, {
          useremail: email,
          userpassword: senha,
          role: role,
          teachercpf: cpf
      });
      console.log(res.data.token)
      createProfile(res.data.username, res.data.profilepic);
      if (res.data.token && role === 'teacher') {
          storeData(res.data.token);
          navigate('/perfilProf');
      }

      if (res.data.token && role === 'student') {
          storeData(res.data.token);
          navigate('/perfil')
      }
      clearForm();
  } catch (err) {
      console.log(err);
  }
};

  return (
    <body>
    <C.Box>
        <C.Logo src={Logo}/>
        <C.Container>
        <C.DivButton>
        <C.ButtonAlu href='/loginAluno' >Estudante</C.ButtonAlu>
          <C.ButtonProf href='/loginProfessor'>Professor</C.ButtonProf>
        </C.DivButton>
        <C.FormLogin autocomplete="off">
        <C.InputE id='email' onChange={handleEmail} type="text" placeholder="E-mail ou nome do usuário"/>
        <C.InputS id='cpf' onChange={handleCPF} type="text" placeholder="CPF"/>
        <C.InputS id='senha' onChange={handleSenha} type="password" placeholder="Senha"/>
        <C.div>
            <C.Link>Esqueci minha senha?</C.Link>
        </C.div>
        <C.Button type='button' onClick={login}>Entrar</C.Button>
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
    </body>
  );
};

export default TelaLoginProf;