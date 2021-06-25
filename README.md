# Valoriza

  Projeto desenvolvido durante a NLW Together para valorização pessoal, o sistema permite o cadastro e listagem de usuarios tags e elogios, ou compliments, com relacionamento entre tabelas, listagem personalizada de elogios por usuario, mostrando quem enviou e quem recebeu. O codigo foi desenvolvido utilizando o typescript, node e mais algumas dependencias.

  Projeto conta ainda com sistema de login autenticação, com controle de administrador.


## Dependencies

- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [class-transformer](https://www.npmjs.com/package/class-transformer)
- [express](https://expressjs.com)
- [express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [typeorm](https://www.npmjs.com/package/typeorm)
- [uuid](https://www.npmjs.com/package/uuid)


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
