import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    const uploadImageToAzure = async () => {
        if (!image) return alert("Selecione uma imagem para enviar.");

        // Defina o SAS token e a URL base do Blob Storage
        const sasToken = process.env.REACT_APP_SAS_TOKEN;
        const blobBaseUrl = process.env.REACT_APP_AZURE_STORAGE_URL;

        try {
            // Crie um nome único para o blob
            const blobName = new Date().getTime() + "-" + image.name;
            const signedUrl = `${blobBaseUrl}/${blobName}?${sasToken}`;

            // Convertendo o arquivo de imagem para um Blob binário
            const formData = new FormData();
            formData.append("file", image);

            // Opções para a requisição
            const options = {
                headers: {
                    'Content-Type': image.type,
                    'x-ms-blob-type': 'BlockBlob',
                },
            };

            // Fazer upload da imagem com `axios` usando FormData
            const response = await axios.put(signedUrl, image, options);

            if (response.status === 201) {
                console.log("Imagem enviada com sucesso:", signedUrl);
                setImageUrl(signedUrl);
                alert("Imagem enviada com sucesso!");
            } else {
                console.error("Falha ao enviar a imagem.");
            }
        } catch (error) {
            console.error("Erro ao enviar a imagem:", error);
            alert("Falha ao enviar a imagem.");
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={uploadImageToAzure}>Enviar Imagem</button>
            {imageUrl && (
                <div>
                    <img src={imageUrl}></img>
                    <p>URL da Imagem:</p>
                    <a href={imageUrl} target="_blank" rel="noopener noreferrer">{imageUrl}</a>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;
