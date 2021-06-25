# Valoriza

  Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## Tecnologias

- [Node](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
## Dependencies

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [typeorm](https://www.npmjs.com/package/typeorm)
- [uuid](https://www.npmjs.com/package/uuid)

## Como executar 

- Clone o repositório
- Rode yarn para baixar as dependências
- Rode yarn typeorm migration:run para criar as tabelas do banco de dados.
- Rode o yarn dev para iniciar a aplicação.
Por fim, a aplicação estará disponível em http://localhost:8000

## Regras

### Cadastro de Usuarios
- [x] Não é permitido cadastrar amais de um usuario com o mesmo e-mail
- [x] Não é permitido cadastrar usuario sem e-mail

### Cadastro de Tags
- [x] Não é permitido cadastrar Tag sem nome
- [x] Não é permitido cadastrar mais de uma tag com o mesmo nome 
- [x] Não é permitido o cadastro de tags por usuarios que não sejam Admins

### Cadastro de Elogios
- [x] Não é permitido cadastrar elogio para si mesmo
- [x] Não é permitido cadastrar elogios para usuarios invalidos/inativos
- [x] O usuario precisa estar autenticado na aplicação



#

Feito com muito carinho -> orientado pela [Rocketseat](https://rocketseat.com.br/)
