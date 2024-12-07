import React from 'react'
import StudentStyles from '../styles/studentStyles'
import TelaMemoryGame from '../components/MemoryGame'
import SideMenuStudent from '../components/SideMenuStudent'

const MemoryGame = () => {
  return (
    <>
      <StudentStyles />
      <SideMenuStudent />
      <TelaMemoryGame />
    </>
  )
}

export default MemoryGame