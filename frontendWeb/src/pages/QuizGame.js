import React from 'react'
import StudentStyles from '../styles/studentStyles'
import TelaQuizGame from '../components/QuizGame'
import SideMenuStudent from '../components/SideMenuStudent'

const MemoryGame = () => {
  return (
    <>
      <StudentStyles/>
      <SideMenuStudent/>
      <TelaQuizGame />
    </>
  )
}

export default MemoryGame