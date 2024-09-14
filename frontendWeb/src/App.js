import React from 'react';
//import GlobalStyle from './styles/global'

import Perfil from './pages/Perfil'
import PerfilProf from './pages/PerfilProf';
import Trilha from './pages/Trilha'
import Modulo from './pages/Modulo'
import Questao from './pages/Questao'
import Questao2 from './pages/Questao2';
import LoginAluno from './pages/LoginAluno';
import LoginProf from './pages/LoginProf';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="perfil" element={<Perfil />} /> 
        <Route path="perfilProf" element={<PerfilProf />} />   
        <Route path="trilha" element={<Trilha />} />
        <Route path="modulo" element={<Modulo />} />
        <Route path="questao" element={<Questao />} />
        <Route path="questao2" element={<Questao2 />} />
        <Route path="loginAluno" element={<LoginAluno/>}/>
        <Route path="loginProfessor" element={<LoginProf/>}/>
        <Route path="cadastro" element={<Cadastro/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
