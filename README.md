// RESUMO:

Neste projeto, desenvolvi uma robusta API de CRUD de usuários utilizando Node.js e a biblioteca Express, com o MongoDB como sistema de gerenciamento de banco de dados. A aplicação oferece funcionalidades abrangentes, permitindo a criação (cadastro), listagem, atualização, exclusão e autenticação de usuários no sistema.


---------------------------------------------------------------------------------------------------------------------------------------------->

// FUNCIONALIDADES:

Criar um usuário;

Logar um usuário;

Listar usuários;

Atualizar dados de um usuário;

Deletar um usuário.

---------------------------------------------------------------------------------------------------------------------------------------------->


// COMO EXECUTAR?

Como cadastrar um usuário?

1- Para cadastrar(criar) um usuário você vai precisar acessar a rota: "http://localhost:3000/register" com o método POST ativado para o usuário adicionar as informações;

2- Não esqueça de adicionar a extrutura JSON para fazer a leitura das informações;

3- Exemplo de cadastro:

{

	"name": "Thiago",
 
	"email": "teste@ghmail.com",
 
	"password": "4002",
 
	"confirmpassword": "4002",
 
	"birthdate": "01/03/2004"
}

________________________________________________________________

Como logar um usuário?

1- Para autenticar um usuário você vai precisar acessar a rota: "http://localhost:3000/authenticate" com o método POST ativado para o usuário adicionar as informações;

2- Não esqueça de adicionar a extrutura JSON para fazer a leitura das informações;

3- Exemplo de cadastro:

{

	"email": "teste@gmail.com",
 
	"password": "4002"
}

________________________________________________________________

Como listar usuários?

Para listar um usuário você vai precisar acessar a rota: "http://localhost:3000/users" ou "http://localhost:3000/users?limit=2&offset=0" caso queira limitar a quantidade de usuários por página
(Não esqueça de executar com o método GET!);

________________________________________________________________

Como atualizar dados de um usuário?

1- Para atualizar dados de um usuário você vai precisar acessar a rota: "//localhost:3000/user/ID" com o método PUT ativado para alterar informações
(No lugar do "ID" coloca-se o ID do usuário que deseja atualizar);

2- Exemplo de como atualizar: 

{

	  "name": "Thiago",
   
  	"email": "novoexemplo@gmail.com",
   
    "oldpassword": "4002",
    
	  "password": "1234",
   
	  "birthdate": "01/03/2004"
}

________________________________________________________________

Como deletar um usuário?

1- Para deletar um usuário você vai precisar acessar a rota: "//localhost:3000/user/ID" com o método DELETE ativado para deletar o usuário escolhido
(No lugar do "ID" coloca-se o ID do usuário que deseja deletar);

________________________________________________________________


INSTRUÇÔES ADICIONAIS:

Cada usuário receberá um Token de acesso para impedir que outros usuariós alterem ou deletem seus dados!



---------------------------------------------------------------------------------------------------------------------------------------------->




// TECNOLOGIAS UTILIZADAS:

->  Para o banco de dados, optei pelo MongoDB, fazendo uso da biblioteca "Mongoose" para facilitar o armazenamento e manipulação dos dados da minha aplicação;


->  Incluí o "nodemon" no projeto para reiniciar automaticamente minha API sempre que uma alteração no código for realizada, proporcionando um ambiente de desenvolvimento mais eficiente;


->  Adotei o "dotenv" para armazenar informações sensíveis do meu banco, garantindo uma gestão mais segura de variáveis de ambiente;


->  Implementei o "bcrypt" para proteger as senhas dos usuários através de criptografia, aumentando a segurança da aplicação;


->  Integrei o "Jsonwebtoken" para restringir o acesso a usuários não cadastrados no sistema, contribuindo para a segurança e controle de permissões na minha aplicação.


->  Utilizei o Visual Studio Code como ambiente de execução para minha API.














