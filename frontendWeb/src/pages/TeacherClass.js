import React from 'react'
import TeacherStyles from '../styles/teacherStyles'
import MenuLateral from '../components/MenuLateralProf'
import Classroom from '../components/Classroom';

const TeacherClass = () => {
  return (
    <>
      <TeacherStyles />
      <MenuLateral />
      <Classroom />
    </>
  )
}

export default TeacherClass