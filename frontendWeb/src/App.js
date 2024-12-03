import React from 'react';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Register from './pages/Register';
import StudentProfile from './pages/StudentProfile'
import TeacherProfile from './pages/TeacherProfile';
import Trilha from './pages/Trilha'
import Module from './pages/Module'
import Question from './pages/Question'
import Question2 from './pages/Question2';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import TeacherClass from './pages/TeacherClass';
import CreateClassroom from './pages/CreateClassroom';
import MemoryGame from './pages/MemoryGame';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="/register" />} />
              <Route path="register" element={<Register />} />
              <Route path="studentLogin" element={<StudentLogin />} />
              <Route path="teacherLogin" element={<TeacherLogin />} />
              <Route path="studentProfile" element={<StudentProfile />} />
              <Route path="teacherProfile" element={<TeacherProfile />} />
              <Route path="trilha" element={<Trilha />} />
              <Route path="module" element={<Module />} />
              <Route path="teacherClass" element={<TeacherClass />} />
              <Route path='createClassroom' element={<CreateClassroom />} />
              <Route path='memoryGame' element={<MemoryGame/>}/>
              <Route path="question" element={<Question />} />
              <Route path="question2" element={<Question2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;
