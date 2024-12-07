# Etapa 1: Build da aplicação
FROM node:20-alpine AS builder

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código-fonte da aplicação para o contêiner
COPY . .

# Execute o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação
FROM node:20-alpine

# Instale o pacote global serve para servir arquivos estáticos
RUN npm install -g serve

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de build da etapa anterior
COPY --from=builder /app/build ./build

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar o servidor com serve
CMD ["serve", "-s", "build", "-l", "3000"]
