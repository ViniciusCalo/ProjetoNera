import React, { useState } from 'react';
import { BlockBlobClient } from '@azure/storage-blob';

const UploadImageToAzure = () => {
    const [image, setImage] = useState(null);

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    const uploadImageToAzure = async () => {
        if (!image) return alert("Selecione uma imagem para enviar.");

        // Defina o SAS token e a URL base do Blob Storage
        const sasToken = process.env.REACT_APP_SAS_TOKEN; // Substitua pelo seu token SAS completo (sem espaços extras)
        const blobBaseUrl = process.env.REACT_APP_AZURE_STORAGE_URL; // Substitua pelo nome da sua conta Azure

        try {
            // Crie um nome único para o blob
            const blobName = new Date().getTime() + "-" + image.name;

            // Construa a URL do Blob usando o nome do contêiner, nome do blob e o SAS token
            const blobUrl = `${blobBaseUrl}/image/${blobName}?${sasToken}`;

            // Inicialize o cliente do Blob diretamente para o Blob específico
            const blockBlobClient = new BlockBlobClient(blobUrl);

            // Enviar a imagem para o Blob
            await blockBlobClient.uploadBrowserData(image);

            // Exibir a URL completa com o SAS token no console
            console.log("URL da imagem com SAS:", blobUrl);
            alert("Imagem enviada com sucesso!");

        } catch (error) {
            console.error("Erro ao enviar a imagem:", error);
            alert("Falha ao enviar a imagem.");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadImageToAzure}>Enviar Imagem</button>
        </div>
    );
};

export default UploadImageToAzure;
