import React from 'react'
import * as C from './styles'
import fracao from './img/fracao.svg'
import logo from './img/Icone.png'
import lupa from './img/lupa_modulo.svg'
import modulo from './img/modulo.svg'
import caminho1 from './img/caminho1.svg'
import caminho2 from './img/caminho2.svg'
import caminho3 from './img/caminho3.svg'



const TelaModulo = () => {
  return (
    <>
    <C.Header>
        <C.IconHeader src={fracao} alt="Sair" />
        <C.Title>Fraçāo</C.Title>
    </C.Header>
    <C.Container>
        <C.Logo src={logo} alt="Sair" />
        <C.DivConquista>
            <C.Conquista src={lupa} alt="Sair" />
            <C.textConquista>Modulo Explorador de frações</C.textConquista>
        </C.DivConquista>
        <C.DivModulo>
            <a href='/questao'><C.M1 src={modulo} alt='Modulo 1'/></a>
            <C.C1 src={caminho1} alt='Caminho do Modulo 1'/>
            <C.M2 src={modulo} alt='Modulo 2'/>
            <C.C2 src={caminho2} alt='Caminho do Modulo 2'/>
            <C.M3 src={modulo} alt='Modulo 3'/>
            <C.C3 src={caminho3} alt='Caminho do Modulo 3'/>
            <C.M4 src={modulo} alt='Modulo 3'/>
        </C.DivModulo>
    </C.Container>
    </>
  )
}

export default TelaModulo