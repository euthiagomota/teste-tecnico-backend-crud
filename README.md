RESUMO:

Neste projeto, desenvolvi uma robusta API de CRUD de usuários utilizando Node.js e a biblioteca Express, com o MongoDB como sistema de gerenciamento de banco de dados. A aplicação oferece funcionalidades abrangentes, permitindo a criação (cadastro), listagem, atualização, exclusão e autenticação de usuários no sistema.

Para cadastrar um usuário, são necessárias informações como nome, e-mail, senha, confirmação de senha e data de nascimento. No banco de dados, são armazenados o nome, e-mail, senha criptografada, data de nascimento e um ID único associado a cada usuário.

O processo de login foi simplificado, exigindo apenas a inserção do e-mail e senha do usuário.


---------------------------------------------------------------------------------------------------------------------------------------------->

FUNCIONALIDADES:

Criar um usuário;

Logar um usuário;

Listar usuários;

Atualizar dados de um usuário;

Deletear um usuário;

---------------------------------------------------------------------------------------------------------------------------------------------->


COMO EXECUTAR?







---------------------------------------------------------------------------------------------------------------------------------------------->



// TECNOLOGIAS UTILIZADAS:

Para o banco de dados, optei pelo MongoDB, fazendo uso da biblioteca "Mongoose" para facilitar o armazenamento e manipulação dos dados da minha aplicação;

Incluí o "nodemon" no projeto para reiniciar automaticamente minha API sempre que uma alteração no código for realizada, proporcionando um ambiente de desenvolvimento mais eficiente;

Adotei o "dotenv" para armazenar informações sensíveis do meu banco, garantindo uma gestão mais segura de variáveis de ambiente;

Implementei o "bcrypt" para proteger as senhas dos usuários através de criptografia, aumentando a segurança da aplicação;

Integrei o "Jsonwebtoken" para restringir o acesso a usuários não cadastrados no sistema, contribuindo para a segurança e controle de permissões na minha aplicação.














