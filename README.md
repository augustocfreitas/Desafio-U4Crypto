# Desafio U4Crypto 

## Autor - Augusto Coutinho de Freitas

## Orientador - Lucas Lacerda

## Problema

### 1.  Modele um domínio para o seguinte problema:
* Modele um sistema para uma empresa de proteção veicular.
* Nesse sistema existem clientes e terceiros.
* Os clientes podem criar uma conta inserindo informações básicas de cadastro.
* Os clientes podem editar alguns dados cadastrados.
* Os clientes podem criar um evento de acidente, onde será possível informar o veículo envolvido no acidente e o(s) terceiro(s).
* Os terceiros são cadastrados quando é criado um acidente, se não houver um registro prévio na base de dados.
* Todos os usuários(clientes e terceiros) precisam ter documentos associados as suas contas.
* Quando um houve o cadastro de um cliente que já foi envolvido como terceiro em um acidente, é preciso migrar o usuário para cliente sem perder o vínculo criado no acidente.

### 2.	Crie uma API RESTful em NodeJS com as seguintes tecnologias:

* Typescript.
* HapiJS.
* TypeORM.
* PostgresSQL.
* Jest

## Instruções de utilização
Method: GET; Path: /api/getAllUsers/ ; Return: All Users
Method: GET; Path: /api/getUser/ ; Params: Id: UserId Return: User (UserId)
Method: POST; Path: /api/createUser/ ; Params: { userName: new client user name;
																					password: new client password;
																					email: new cleint email;
																				 } Return successful mensage or error mensage;
Method: POST; Path: /api/deleteUser/ ; Params: { id: Id of Client that will be Deleted
																				 } Return successful mensage or error mensage;
Method: POST; Path: /api/updateUser/ ; Params: { id: Id of Client that will be Update
																					 email: Updated Email
																				 } Return successful mensage or error mensage;
## Histórico de versões

* 0.0.0
    * Criação do Ambiente de trabalho.
* 0.0.2
    * 
* 0.0.3
    * 

