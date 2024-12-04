import React, { useState } from 'react';
import * as C from './styles';
import Logo from './img/logo.png';
import google from './img/google.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch';

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirma, setSenhaConfirma] = useState('');
  const [role, setRole] = useState('student');
  const [cpf, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleProfile = () => setRole((prevProfile) => (prevProfile === 'student' ? 'teacher' : 'student'));

  const validateField = (field, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    let error = '';

    switch (field) {
      case 'nome':
        if (!value) error = 'O nome de usuário é obrigatório';
        else if (value.length < 4) error = 'O nome de usuário deve ter pelo menos quatro caracteres';
        break;
      case 'email':
        if (!value) error = 'O e-mail é obrigatório';
        else if (!emailRegex.test(value)) error = 'O e-mail deve ser válido';
        break;
      case 'cpf':
        if (!value) error = 'O CPF é obrigatório';
        else if (!cpfRegex.test(value)) error = 'O CPF deve estar no formato 000.000.000-00';
        break;
      case 'senha':
        if (!value) error = 'A senha é obrigatória';
        else if (value.length > 15) error = 'A senha deve ter no máximo 15 caracteres';
        break;
      case 'senhaConfirma':
        if (!value) error = 'A confirmação de senha é obrigatória';
        else if (value !== senha) error = 'As senhas não correspondem';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const handleClick = async () => {
    const requiredFields = { nome, email, senha, senhaConfirma };
    if (role === 'teacher') {
      requiredFields.cpf = cpf;
    }
    let hasError = false;

    Object.keys(requiredFields).forEach((field) => {
      if (!requiredFields[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: 'Este campo é obrigatório' }));
        hasError = true;
      }
    });

    if (hasError || Object.values(errors).some((error) => error)) {
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, {
        username: nome,
        useremail: email,
        userpassword: senha,
        role: role,
        ...(role === 'teacher' && { teachercpf: cpf.replace(/\D/g, '') }),
      });
      alert('Conta criada com sucesso!');
      navigate(role === 'student' ? '/loginAluno' : '/loginProfessor');
      clearForm();
    } catch (err) {
      console.log(err);
    }
  };

  const clearForm = () => {
    setNome('');
    setEmail('');
    setSenha('');
    setSenhaConfirma('');
    setCPF('');
    setRole('teacher');
    setErrors({});
  };

  const handleCPFChange = (e) => {
    const formattedCPF = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{2})$/, '$1-$2')
      .slice(0, 14);
    setCPF(formattedCPF);
    validateField('cpf', formattedCPF);
  };

  return (
    <body>
      <C.Box>
        <C.Div>
          <C.Logo src={Logo} />
          <C.textEntrar>Tem uma conta?</C.textEntrar>
          <C.ButtonEntrar href="/studentLogin">Entrar</C.ButtonEntrar>
        </C.Div>
        <C.Container>
          <C.FormLogin autoComplete="off">
            <C.Tituloform>Crie o seu perfil</C.Tituloform>
            <C.InputE
              onChange={(e) => {
                setNome(e.target.value.slice(0, 150));
                validateField('nome', e.target.value);
              }}
              value={nome}
              type="text"
              placeholder="Nome do usuário"
            />
            {errors.nome && <C.ErrorText>{errors.nome}</C.ErrorText>}

            <C.InputE
              onChange={(e) => {
                setEmail(e.target.value.slice(0, 150));
                validateField('email', e.target.value);
              }}
              value={email}
              type="text"
              placeholder="E-mail"
            />
            {errors.email && <C.ErrorText>{errors.email}</C.ErrorText>}

            {role === 'teacher' && (
              <>
                <C.InputE
                  onChange={handleCPFChange}
                  value={cpf}
                  type="text"
                  placeholder="CPF"
                />
                {errors.cpf && <C.ErrorText>{errors.cpf}</C.ErrorText>}
              </>
            )}

            <C.DivButton>
              <C.PasswordContainer>
                <C.InputS
                  style={{ border: `2px solid ${errors.senha ? 'red' : '#ccc'}` }}
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value.slice(0, 15));
                    validateField('senha', e.target.value);
                  }}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                />
                <C.ShowPasswordIcon
                  onClick={() => setShowPassword(!showPassword)}
                  showPassword={showPassword}
                />
              </C.PasswordContainer>
              {errors.senha && <C.ErrorText>{errors.senha}</C.ErrorText>}

              <C.PasswordContainer>
                <C.InputS
                  style={{ border: `2px solid ${errors.senhaConfirma ? 'red' : '#ccc'}` }}
                  value={senhaConfirma}
                  onChange={(e) => {
                    setSenhaConfirma(e.target.value);
                    validateField('senhaConfirma', e.target.value);
                  }}
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirmar Senha"
                />
                <C.ShowPasswordIcon
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  showPassword={showConfirmPassword}
                />
              </C.PasswordContainer>
              {errors.senhaConfirma && <C.ErrorText>{errors.senhaConfirma}</C.ErrorText>}
            </C.DivButton>

            <ToggleSwitch width={'80%'} height={'30px'} onClick={toggleProfile} value={role} />
            <C.Button type="button" onClick={handleClick}>
              Criar Conta
            </C.Button>
            <C.DivLinha>
              <C.linha1></C.linha1>
              ou
              <C.linha2></C.linha2>
            </C.DivLinha>
            <C.ButtonG>
              <C.icon src={google} />
              Login com Google
            </C.ButtonG>
            <C.Text>
              Ao entrar no N.E.R.A., você concorda com os nossos Termos e Política de Privacidade.
            </C.Text>
          </C.FormLogin>
        </C.Container>
      </C.Box>
    </body>
  );
};

export default RegisterScreen;
