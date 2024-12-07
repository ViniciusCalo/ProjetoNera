import React from 'react'
import TeacherStyles from '../styles/teacherStyles'
import SideMenuTeacher from '../components/SideMenuTeacher'
import TeacherProfileScreen from '../components/TeacherProfileScreen'



const TeacherProfile = () => {
  return (
    <>
      <TeacherStyles />
      <SideMenuTeacher />
      <TeacherProfileScreen />
    </>
  )
}

export default TeacherProfile