import React from 'react'
import * as C from './styles'
import trilha from './img/trilha.svg'
import fracao from './img/fracao.svg'
import porct from './img/porcentagem.svg'
import geo from './img/geometria.svg'
import expre from './img/expressao.svg'
import matri from './img/matrizes.svg'

const TelaTrila = () => {
  return (
    <>
    <C.Header>
        <C.IconHeader src={trilha}/>
        <C.TitleHeader>Trilha</C.TitleHeader>
    </C.Header>
    <C.Container>
        <a href='/modulo'><C.DivTrilha1>
            <C.ImgTrilha src={fracao}/>
            <C.TitleTrilha>Trilha de Frações</C.TitleTrilha>
        </C.DivTrilha1>
        </a>
        <C.DivTrilha2>
            <C.ImgTrilha src={porct}/>
            <C.TitleTrilha>Trilha de porcentagem</C.TitleTrilha>
        </C.DivTrilha2>
        <C.DivTrilha3>
            <C.ImgTrilha src={geo}/>
            <C.TitleTrilha>Trilha de Geometria</C.TitleTrilha>
        </C.DivTrilha3>
        <C.DivTrilha4>
            <C.ImgTrilha src={matri}/>
            <C.TitleTrilha>Trilha de matrizes</C.TitleTrilha>
        </C.DivTrilha4>
        <C.DivTrilha5>
            <C.ImgTrilha src={expre}/>
            <C.TitleTrilha>Trilha de expressao</C.TitleTrilha>
        </C.DivTrilha5>

    </C.Container>
    </>
  )
}

export default TelaTrila