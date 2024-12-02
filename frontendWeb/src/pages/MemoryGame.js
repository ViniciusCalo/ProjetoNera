import React from 'react'
import GlobalStyle from '../styles/global'
import TelaMemoryGame from '../components/MemoryGame'
import MenuLateral from '../components/MenuLateral'

const MemoryGame = () => {
  return (
    <>
    <MenuLateral/>
    <TelaMemoryGame/>
    <GlobalStyle/>
    </>
  )
}

export default MemoryGame