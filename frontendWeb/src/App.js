import React from 'react';
//import GlobalStyle from './styles/global'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Perfil from './pages/Perfil'
import PerfilProf from './pages/PerfilProf';
import Trilha from './pages/Trilha'
import Modulo from './pages/Modulo'
import Questao from './pages/Questao'
import Questao2 from './pages/Questao2';
import LoginAluno from './pages/LoginAluno';
import LoginProf from './pages/LoginProf';
import TeacherClass from './pages/TeacherClass';
import CreateClass from './pages/CreateClass';
import MemoryGame from './pages/MemoryGame';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="/cadastro" />} />
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
              <Route path='createClass' element={<CreateClass />} />
              <Route path='memoryGame' element={<MemoryGame/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;
