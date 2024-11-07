import React from 'react'
import * as C from './styles'
import pizza from './img/pizza.png'
import reload from './img/reload.png'
import seta from './img/set.svg'
import tip from './img/tip.png'
import next from './img/next.png'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Modal from 'react-modal';

const uri = process.env.REACT_APP_API_URL || "http://localhost:3001"; 

const TelaQuestao = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    // Função que abre a modal
 function abrirModal() {
   setIsOpen(true);
 }

 // Função que fecha a modal
 function fecharModal() {
   setIsOpen(false);
 }

    const [questoes, setQuestoes] = useState([])
    useEffect(() => {
        const getQuestao = async () => {
            try {
                const response = await axios.get(`${uri}/questao/alternativa/2`)
                setQuestoes(response.data)
            } catch (err) {
                console.log(err);
            }
        };
        getQuestao();
    }, []);

    const [resposta, setResposta] = useState('')
    const [btnnext, setBtnNext] = useState(true);
    const [toogle, setToogle] = React.useState(true);
    const [toogle2, setToogle2] = React.useState(true);
    const [toogle3, setToogle3] = React.useState(true);
    const [toogle4, setToogle4] = React.useState(true);
    const [cor1, setCor1] = React.useState('white');
    const [cor2, setCor2] = React.useState('white');
    const [cor3, setCor3] = React.useState('white');
    const [cor4, setCor4] = React.useState('white');

    useEffect(() => {
        if (toogle === false) {
            setCor1('#5BC0A4')
        }
        if (toogle2 === false) {
            setCor2('#D42E3F')
        }
        if (toogle3 === false) {
            setCor3('#D42E3F')
        }
        if (toogle4 === false) {
            setCor4('#D42E3F')
        }
    }, [toogle, toogle2, toogle3, toogle4])

    const handleAlternativa = async (resposta, cor) => {
        console.log(resposta)
        if (resposta === "Correta") {
            setBtnNext(false)
            if (cor === 'cor1') {
                setToogle(false)
            } else if (cor === 'cor2') {
                setToogle2(false)
            } else if (cor === 'cor3') {
                setToogle3(false)
            } else if (cor === 'cor4') {
                setToogle4(false)
            }
        } else {
            if (cor === 'cor1') {
                setToogle(false)
            } else if (cor === 'cor2') {
                setToogle2(false)
            } else if (cor === 'cor3') {
                setToogle3(false)
            } else if (cor === 'cor4') {
                setToogle4(false)
            }
        }
    }
    //verifcar se a resposta está correta
    const handleVerificar = async (cor, alternativa) => {
        var body = {
            "id": questoes.id_questao,
            "alternativa": alternativa
        }
        try {
            const response = await axios.post(`${uri}/questao/verificar`, body)
            console.log(response.data.message)
            setResposta(response.data.message);
            handleAlternativa(response.data.message, cor)
        } catch (err) {
            console.log(err);
        }
    }

    const handleReaload = () => {
        setToogle(true)
        setToogle2(true)
        setToogle3(true)
        setToogle4(true)
        setCor1('white')
        setCor2('white')
        setCor3('white')
        setCor4('white')
        setBtnNext(true)
    }


    return (
        <>
            <C.Header>
                <C.Titulo>MODULO I - Frações</C.Titulo>
            </C.Header>
            <C.Questao>
                <C.Enunciado>
                    <C.TextoEnunciado>{questoes.id_questao}-{questoes.enunciado}</C.TextoEnunciado>
                </C.Enunciado>
                <C.DivImagem>
                    <img src={pizza} alt="questao1" border="0" />
                </C.DivImagem>
                <C.Alternativas>
                    <C.Alternativa style={{ background: cor2 }} onClick={() => handleVerificar('cor2', questoes.alternativa1)} >
                        <C.TextoAlternativa >{questoes.alternativa1}</C.TextoAlternativa>
                    </C.Alternativa>
                    <C.Alternativa style={{ background: cor1 }} onClick={() => handleVerificar('cor1', questoes.alternativa2)}>
                        <C.TextoAlternativa>{questoes.alternativa2}</C.TextoAlternativa>
                    </C.Alternativa>
                    <C.Alternativa style={{ background: cor3 }} onClick={() => handleVerificar('cor3', questoes.alternativa3)}>
                        <C.TextoAlternativa>{questoes.alternativa3}</C.TextoAlternativa>
                    </C.Alternativa>
                    <C.Alternativa style={{ background: cor4 }} onClick={() => handleVerificar('cor4', questoes.alternativa4)}>
                        <C.TextoAlternativa>{questoes.alternativa4}</C.TextoAlternativa>
                    </C.Alternativa>
                </C.Alternativas>
            </C.Questao>
            <C.ContainerMenu>
                <C.BtnReload onClick={() => handleReaload()} ><C.iconButton src={reload} alt='Refazer'></C.iconButton>Refazer</C.BtnReload>
                <C.BtnTip onClick={abrirModal}><C.IconTip src={tip} alt='Dica'></C.IconTip>Dica</C.BtnTip>
                <C.BtnNext disabled={btnnext} ><C.iconButton src={next} alt='Próximo'></C.iconButton>Próximo</C.BtnNext>
            </C.ContainerMenu>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={fecharModal}
                contentLabel="Modal de exemplo"
                style={{
                    overlay: {
                      backgroundColor: 'rgba(217, 217, 217, 0.80)',
                      zIndex: '1000'

                    },
                    content: {
                        left: '26%',
                      background: '#FFFFFF',
                      borderRadius: '30px',
                      width: '45%',
                      padding: '20px'
                    }
                  }}
            >   
                <C.BtnVoltar onClick={fecharModal}><C.iconButton src={seta}></C.iconButton></C.BtnVoltar>
                <C.CotainerModal>
                    <C.ImgModal src={tip}/>
                    <C.TituloModal>Dica:</C.TituloModal>
                    <C.TextoModal>Conte as fatias faltantes! Identifique quantas fatias estão faltando na pizza. Esse número será o numerador da fração correspondente.</C.TextoModal>

                </C.CotainerModal>
            </Modal>
        </>
    )
}

export default TelaQuestao