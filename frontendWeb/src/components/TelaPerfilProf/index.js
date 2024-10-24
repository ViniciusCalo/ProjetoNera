import React, { useRef } from 'react';
import * as C from './styles'
import { AiTwotoneEdit } from "react-icons/ai";
//mport MenuLateral from '../MenuLateral'
import imgPerfil from './img/user.png'
import ClassroomCard from '../ClassroomCard';
import TrailCard from '../TrailCard';

const TelaPerfil = () => {


    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    return (
        <>
            <C.Container>
                <C.Infos>
                    <C.imgPerfil src={imgPerfil} alt="Imagem de perfil" />
                    <div>
                        <C.User>@gggg{localStorage.getItem("usuario")}</C.User>
                        <C.Name>xxgggg hhhh{localStorage.getItem("usuario")}</C.Name>
                    </div>
                    <C.ButtonEditar><AiTwotoneEdit /> Editar Perfil</C.ButtonEditar>
                </C.Infos>
                <C.ContainerC>
                    <C.Title>Salas de Aula</C.Title>
                        <C.Carrousel>
                            {data.map(item => (
                                <ClassroomCard
                                    titulo={item.title}
                                />
                            ))}
                        </C.Carrousel>
                </C.ContainerC>
                <C.ContainerC>
                    <C.Title>Trilhas</C.Title>
                    <C.Trilhas>
                        <TrailCard />
                        <TrailCard />
                        <TrailCard />
                        <TrailCard />
                        <TrailCard />
                    </C.Trilhas>
                </C.ContainerC>
            </C.Container>
        </>
    )
}

export default TelaPerfil