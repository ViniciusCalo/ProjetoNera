import React from 'react';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from './pages/Register';
import StudentProfile from './pages/StudentProfile'
import TeacherProfile from './pages/TeacherProfile';
import Track from './pages/Track'
import Module from './pages/Module'
import Question from './pages/Question'
import Question2 from './pages/Question2';
import StudentLogin from './pages/StudentLogin';
import TeacherLogin from './pages/TeacherLogin';
import TeacherClass from './pages/TeacherClass';
import CreateClassroom from './pages/CreateClassroom';
import MemoryGame from './pages/MemoryGame';
import QuizGame from './pages/QuizGame';

import ProtectedRoute from './components/ProtectedRoute';



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route>
              {/* Rota pública */}
              <Route path="/" element={<Navigate to="/register" />} />
              <Route path="register" element={<Register />} />
              <Route path="studentLogin" element={<StudentLogin />} />
              <Route path="teacherLogin" element={<TeacherLogin />} />

              {/* Rotas protegidas */}

              <Route
              path="studentProfile"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <StudentProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="teacherProfile"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="track"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Track />
                </ProtectedRoute>
              }
            />
            <Route
              path="module"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Module />
                </ProtectedRoute>
              }
            />
            <Route
              path="teacherClass"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <TeacherClass />
                </ProtectedRoute>
              }
            />
            <Route
              path="createClassroom"
              element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <CreateClassroom />
                </ProtectedRoute>
              }
            />
            <Route
              path="memoryGame"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <MemoryGame />
                </ProtectedRoute>
              }
            />
            <Route
              path="quizGame"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <QuizGame />
                </ProtectedRoute>
              }
            />
            <Route
              path="question"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Question />
                </ProtectedRoute>
              }
            />
            <Route
              path="question2"
              element={
                <ProtectedRoute allowedRoles={['student']}>
                  <Question2 />
                </ProtectedRoute>
              }
            />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;
