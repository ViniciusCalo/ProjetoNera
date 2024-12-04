import React from 'react'
import TeacherStyles from '../styles/teacherStyles'
import SideMenuTeacher from '../components/SideMenuTeacher'
import Classroom from '../components/ClassRoom';

const TeacherClass = () => {
  return (
    <>
      <TeacherStyles />
      <SideMenuTeacher />
      <Classroom />
    </>
  )
}

export default TeacherClass