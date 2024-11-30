import React from 'react'
import StudentStyles from '../styles/studentStyles'
import TelaMemoryGame from '../components/MemoryGame'
import MenuLateral from '../components/MenuLateral'

const MemoryGame = () => {
  return (
    <>
      <StudentStyles />
      <MenuLateral />
      <TelaMemoryGame />
    </>
  )
}

export default MemoryGame