import React, { useState } from 'react';
import * as C from './styles';
import Logo from './img/logo.png';
import google from './img/google.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google'; // Correção para a importação do Google Login

const TelaLoginAluno = () => {
  const nav = useNavigate();
  const [sessao, setSessao] = useState([]);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSenha = (e) => {
    setSenha(e.target.value);
  };

  const handleVerificarUsuario = async () => {
    const body = {
      email: email,
      senha: senha
    };

    try {
      const uri = process.env.REACT_APP_API_URL || "http://localhost:3001";
      const response = await axios.post(`${uri}/usuario/login`, body);
      setSessao(response.data.message);
      console.log(response.data.message);
      localStorage.setItem('usuario', email);
      nav('/perfil');
    } catch (err) {
      console.log(err);
      alert("Senha e/ou email incorreto");
    }
  };

  const [userInfo, setUserInfo] = useState(null);

  const loginSocial = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Chamada à API do Google para obter os dados do usuário
        const userResponse = await axios.get(
          'https://www.googleapis.com/oauth2/v3/userinfo',
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        
        // Defina as informações do usuário no estado
        setUserInfo(userResponse.data);
        console.log("Dados do usuário:", userResponse.data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
      }
    },
    onError: (error) => {
      console.error("Erro durante o login:", error);
      alert('Erro durante o login com Google');
    },
  });
  
  return (
    <C.Box>
      <C.Logo src={Logo} alt="Logo" />
      <C.Container>
        <C.DivButton>
          <C.ButtonAlu>Estudante</C.ButtonAlu>
          <C.ButtonProf href='/loginProfessor'>Professor</C.ButtonProf>
        </C.DivButton>
        <C.FormLogin autoComplete="off">
          <C.InputE
            id='email'
            onChange={handleEmail}
            type="text"
            placeholder="E-mail ou nome do usuário"
          />
          <C.InputS
            id='senha'
            onChange={handleSenha}
            type="password"
            placeholder="Senha"
          />
          <C.div>
            <C.Link href="#">Esqueci minha senha?</C.Link>
          </C.div>
          <C.Button type='button' onClick={handleVerificarUsuario}>
            Entrar
          </C.Button>
          <C.DivLinha>
            <C.linha1></C.linha1>
            ou
            <C.linha2></C.linha2>
          </C.DivLinha>
          <C.ButtonG type='button' onClick={() => loginSocial()}>
            <C.icon src={google} alt="Google logo" />
            Login com Google
          </C.ButtonG>
          <C.ButtonC href='/cadastro'>Criar Conta</C.ButtonC>
        </C.FormLogin>
      </C.Container>
    </C.Box>
  );
};

export default TelaLoginAluno;
