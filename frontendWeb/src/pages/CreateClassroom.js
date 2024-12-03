import React from 'react'
import TeacherStyles from '../styles/teacherStyles'
import MenuLateral from '../components/MenuLateralProf'
import CreateClassForm from '../components/CreateClassForm'

const CreateClassroom = () => {
  return (
    <>
      <TeacherStyles />
      <MenuLateral />
      <CreateClassForm />
    </>
  )
}

export default CreateClassroom