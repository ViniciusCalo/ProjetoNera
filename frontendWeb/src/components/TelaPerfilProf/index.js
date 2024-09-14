import React from 'react'
import * as C from './styles'
import { AiTwotoneEdit } from "react-icons/ai";
//mport MenuLateral from '../MenuLateral'
import imgPerfil from './img/user.png'
import icon1 from './img/icon1.svg'
import icon2 from './img/icon2.svg'
import icon3 from './img/icon3.svg'

const TelaPerfil = () => {



    return (
        <>
            <C.Container>
                <C.Infos>
                    <C.imgPerfil src={imgPerfil} alt="Imagem de perfil" />
                    <div>
                        <C.User>@{localStorage.getItem("usuario")}</C.User>
                        <C.Name>{localStorage.getItem("usuario")}</C.Name>
                    </div>
                    <C.ButtonEditar><AiTwotoneEdit /> Editar Perfil</C.ButtonEditar>
                </C.Infos>
                <C.ContainerC>
                    <C.Title>Salas de Aula</C.Title>
                    <C.ContainerSalas>
                        <C.Div>
                            <C.S1>
                                <C.SalaImg src={icon1} alt="Imagem de perfil" />
                            </C.S1>
                            <C.SalaName>6° Ano A</C.SalaName>
                        </C.Div>
                        <C.Div>
                            <C.S2>
                                <C.SalaImg src={icon2} alt="Imagem de perfil" />
                            </C.S2>
                            <C.SalaName>7° Ano B</C.SalaName>
                        </C.Div>
                        <C.Div>
                            <C.S4>
                                <C.SalaImg src={icon3} alt="Imagem de perfil" />
                            </C.S4>
                            <C.SalaName>8° Ano A</C.SalaName>
                        </C.Div>


                    </C.ContainerSalas>
                </C.ContainerC>
            </C.Container>
        </>
    )
}

export default TelaPerfil