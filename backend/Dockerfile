# Use uma imagem base do Node.js (especifique a versão desejada)
FROM node:18

# Crie e defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie os arquivos de dependências (package.json e package-lock.json)
COPY package*.json ./

# Instale as dependências
RUN npm install --production

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta usada pela aplicação
EXPOSE 3333

# Comando para rodar a aplicação
CMD ["node", "src/server.js"]
