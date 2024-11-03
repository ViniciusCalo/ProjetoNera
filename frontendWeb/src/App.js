import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Perfil from './pages/Perfil';
import PerfilProf from './pages/PerfilProf';
import Trilha from './pages/Trilha';
import Modulo from './pages/Modulo';
import Questao from './pages/Questao';
import Questao2 from './pages/Questao2';
import LoginAluno from './pages/LoginAluno';
import LoginProf from './pages/LoginProf';
import TeacherClass from './pages/TeacherClass';
import CreateClass from './pages/CreateClass';
import Cadastro from './pages/Cadastro';

// Substitua pelo seu Client ID da API Google
const GOOGLE_CLIENT_ID = "925583381049-fgqie9ocvvaojvpvg0acvkisgnl9erst.apps.googleusercontent.com";

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginAluno />} /> {/* Página inicial */}
          <Route path="perfil" element={<Perfil />} /> 
          <Route path="perfilProf" element={<PerfilProf />} />   
          <Route path="trilha" element={<Trilha />} />
          <Route path="modulo" element={<Modulo />} />
          <Route path="questao" element={<Questao />} />
          <Route path="questao2" element={<Questao2 />} />
          <Route path="loginAluno" element={<LoginAluno />} />
          <Route path="loginProfessor" element={<LoginProf />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="teacherClass" element={<TeacherClass />} />
          <Route path="createClass" element={<CreateClass />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
