import React from 'react'
import TeacherStyles from '../styles/teacherStyles'
import MenuLateral from '../components/MenuLateralProf'
import TeacherProfileScreen from '../components/TeacherProfileScreen'



const TeacherProfile = () => {
  return (
    <>
      <TeacherStyles />
      <MenuLateral />
      <TeacherProfileScreen />
    </>
  )
}

export default TeacherProfile