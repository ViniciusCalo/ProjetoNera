import React from 'react'
// Importa a modal do react-modal
import Modal from 'react-modal';

const ModalDica = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
     // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }

  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={abrirModal}>Abrir modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel="Modal de exemplo"
      >
        <h2>Olá</h2>
        <button onClick={fecharModal}>Fechar</button>
        <div>Eu sou uma modal</div>
      </Modal>
    </div>
  )
}

export default ModalDica