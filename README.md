# TECH-CHALLENGE-MODULO-2

Autor do Desenvolvimento:

- RM: 357200 - Leonardo Rodrigues Menossi

## Objetivo

O objetivo desta API é gerenciar postagens de blog por meio de operações de CRUD.

## Relato de experiências e desafios

Foi um desafio enorme desenvolver esse tech challenge sozinho, porém, as aulas com a extrema qualidade de ensino, ppude desenvolver e concluir mais um tech challenge

## Tecnologias utilizadas

- Node.js
- TypeScript
- MongoDB
- Express
- Swagger
- Docker

## Instalação da aplicação

Este projeto está pronto para ser executado em um ambiente Docker. Por este motivo, será necessária apenas a instalação do Docker, não sendo necessária a instalação manual do projeto. Também não será necessária a instalação manual do banco de dados (MongoDB).

Caso não tenha o Docker instalado, siga as instruções para seu sistema operacional na [documentação oficial do Docker](https://docs.docker.com/get-started/get-docker/).

- Subir a aplicação utilizando Docker:

```bash
docker run --name posts -p 3000:3000 -t -d leomenossi/posts
```

##### Conferir os ENDPOINTS da api:

Para facilitar a integração e uso da nossa API, disponibilizamos uma documentação detalhada através do **Swagger**. Nela, você encontrará todos os endpoints disponíveis, métodos suportados, exemplos de requisições e respostas, bem como informações sobre parâmetros necessários.

```bash
http://localhost:3000/api
```