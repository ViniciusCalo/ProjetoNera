# Use uma imagem base do Node.js para executar o servidor
FROM node:20-alpine

# Crie o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instale o pacote "serve" e outras dependências do projeto
RUN npm install -g serve && npm install

# Copie os arquivos de build para o diretório de trabalho
COPY build ./build

# Exponha a porta 3000 (ou a porta que o serve usará)
EXPOSE 3000

# Comando para rodar o servidor com o pacote "serve"
CMD ["serve", "-s", "build", "-l", "3000"]
