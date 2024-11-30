import React from 'react'
import '../styles/studentStyles.css';
import TelaMemoryGame from '../components/MemoryGame'
import MenuLateral from '../components/MenuLateral'

const MemoryGame = () => {
  return (
    <>
    <MenuLateral/>
    <TelaMemoryGame/>
    </>
  )
}

export default MemoryGame