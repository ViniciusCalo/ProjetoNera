import React, { useState } from 'react';
import * as C from './styles';
import Logo from './img/logo.png';
import google from './img/google.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setName, setProfileImageUrl, setRole, setToken } from '../../store/userSlice';
import axios from "axios";
import { useGoogleLogin } from '@react-oauth/google';

const StudentLoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const role = "student";

  const createProfile = (username, userpicture, token, role) => {
    dispatch(setName(username));
    dispatch(setProfileImageUrl(userpicture));
    dispatch(setToken(token));
    dispatch(setRole(role)); 
  };

  const storeData = async (value) => {
    try {
      localStorage.setItem('token', value);
    } catch (e) {
      console.error('Erro ao salvar token', e);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleSenha = (e) => {
    setSenha(e.target.value);
    setError('');
  };

  const clearForm = () => {
    setEmail('');
    setSenha('');
  };

  const login = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('O campo E-mail ou nome de usuário é obrigatório');
      return;
    }

    if (!senha) {
      setError('O campo Senha é obrigatório');
      return;
    }

    try {
      const res = await axios.post(`${apiUrl}/users/login`, {
        useremail: email,
        userpassword: senha,
        role: role,
      });
      createProfile(res.data.username, res.data.profilepic, res.data.token, role);
      if (res.data.token) {
        storeData(res.data.token);
        navigate('/studentProfile');
      }
      clearForm();
    } catch (err) {
      setError('Usuário ou senha incorretos');
    }
  };

  const loginSocial = useGoogleLogin(
    {
    
    onSuccess: async (tokenResponse) => {
      console.log("Token Google:", tokenResponse);  // Log para ver o token
      try {
        const userResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log("User Info:", userResponse.data);  // Log para ver os dados do usuário
  
        const { email, name, picture } = userResponse.data;
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    },
  });
  

  return (
    <body>
    <C.Box>
      <C.Logo src={Logo} />
      <C.Container>
        <C.DivButton>
          <C.ButtonAlu>Estudante</C.ButtonAlu>
          <C.ButtonProf href='/teacherLogin'>Professor</C.ButtonProf>
        </C.DivButton>
        <C.FormLogin autoComplete="off">
          <C.InputE
            id='email'
            onChange={handleEmail}
            type="text"
            placeholder="E-mail ou nome do usuário"
            value={email}
          />
          <C.PasswordContainer>
            <C.InputS
              id='senha'
              onChange={handleSenha}
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={senha}
            />
            <C.ShowPasswordButton onClick={(e) => {
                e.preventDefault(); 
                setShowPassword(!showPassword);
              }}>
              {showPassword ? '🙈' : '👁️'}
            </C.ShowPasswordButton>
          </C.PasswordContainer>
          {error && <C.ErrorMessage>{error}</C.ErrorMessage>}
          <C.div>
            <C.Link>Esqueci minha senha?</C.Link>
          </C.div>
          <C.Button type='button' onClick={login}>Entrar</C.Button>
          <C.DivLinha>
            <C.linha1></C.linha1>
            ou
            <C.linha2></C.linha2>
          </C.DivLinha>
          <C.ButtonG onClick={() => loginSocial()}><C.icon src={google}/>Login com Google</C.ButtonG>
          <C.ButtonC href='/register'>Criar Conta</C.ButtonC>
        </C.FormLogin>
      </C.Container>
    </C.Box>
    </body>
  );
};

export default StudentLoginScreen;
