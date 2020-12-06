## Teste novos talentos :star:
API desenvolvida para cadastro de lista de afazeres.

Foi utilizado **Json Web Token** - Para autenticação.

E **Docker e MongoDb** - Para registro no banco de dados.


## O que pode ser feito :checkered_flag:

:small_blue_diamond: Login e cadastro de usuário.

:small_blue_diamond: Registro, update(Funcional apenas no backend) e exclusão de tarefas.

:small_blue_diamond: Marcar tarefas como concluídas.


## O que você precisa

[Node](https://nodejs.org/en/download/)

[Yarn](https://yarnpkg.com/)

## Como instalar

No terminal, clone the project: 

```
git clone https://github.com/LeonardoSalmento/Teste-novos-talentos.git
```

Entre na pasta do projeto:

```
cd Teste-novos-talentos
```

Instale as dependências:
```
yarn
```
or 

```
npm install
```
Entre na pasta frontend pelo prompt de comando e execute a aplicação do frontend:

```
yarn start
```

or 


```
npm start
```

Em outra guia do cmd, acesse a pasta backend e execute o comando para rodar o código para criar o banco no docker:


```
runDocker.sh
```


E em seguida rode o seguinte comando:

```
yarn dev
```

or 


```
npm dev
```

A aplicação está rodando em http://localhost:3333/

## Banco de dados

Como banco de dados foi usando MongoDB.

Foram criadas as tabelas abaixo:

### User

name  | email  | password |created | updated
------|--------|----------|--------|--------
String|String|String|Date|Date

### Task

title|user|created|updated
-----|----|-------|-------
String|Object|Date|Date
