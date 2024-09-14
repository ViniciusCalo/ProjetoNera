import React from 'react'
import * as C from './styles'
import { AiTwotoneEdit } from "react-icons/ai";
//mport MenuLateral from '../MenuLateral'
import imgPerfil from './img/user.svg'
import icon1 from './img/icon1.svg'
import icon2 from './img/icon2.svg'

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
                    <C.Title>Conquistas</C.Title>
                    <C.Carrousel>
                        <C.DivConquista>
                            <C.Card1 />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card1 />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card1 />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card1 />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card1 />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                        <C.DivConquista>
                            <C.Card1 />
                            <C.textConquistado>Explorador de frações</C.textConquistado>
                        </C.DivConquista>
                    </C.Carrousel>
                </C.ContainerC>
                <C.ContainerE>
                    <C.Title>Experiência</C.Title>
                    <C.InfoE>
                        <C.CardE1>
                            <C.DivIcon><C.icon src={icon1} alt="Imagem de perfil" /></C.DivIcon>
                            <C.DivText><C.Text>Nivel Básico</C.Text><C.Text2>500 pontos</C.Text2></C.DivText>
                        </C.CardE1>
                        <C.CardE2>
                            <C.DivIcon><C.icon src={icon2} alt="Imagem de perfil" /></C.DivIcon>
                            <C.DivText><C.Text>Erros  Simples</C.Text><C.Text2>-30 pontos</C.Text2></C.DivText>
                        </C.CardE2>
                        <C.CardE3>
                            <C.DivIcon><C.icon src={icon1} alt="Imagem de perfil" /></C.DivIcon>
                            <C.DivText><C.Text>Nivel  Avançado</C.Text><C.Text2>500 pontos</C.Text2></C.DivText>
                        </C.CardE3>
                        <C.CardE4>
                            <C.DivIcon><C.icon src={icon2} alt="Imagem de perfil" /></C.DivIcon>
                            <C.DivText><C.Text>Erros Duplos</C.Text><C.Text2>-30 pontos</C.Text2></C.DivText>
                        </C.CardE4>
                    </C.InfoE>

                </C.ContainerE>
            </C.Container>
        </>
    )
}

export default TelaPerfil