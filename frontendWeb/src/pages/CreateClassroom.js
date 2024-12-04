import React from 'react'
import TeacherStyles from '../styles/teacherStyles'
import SideMenuTeacher from '../components/SideMenuTeacher'
import CreateClassForm from '../components/CreateClassForm'

const CreateClassroom = () => {
  return (
    <>
      <TeacherStyles />
      <SideMenuTeacher />
      <CreateClassForm />
    </>
  )
}

export default CreateClassroom