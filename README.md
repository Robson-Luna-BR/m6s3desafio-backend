##Projeto Fullstack backend

*É necessário após a clonagem desse repositório, rodar o comando no terminal para instalação das bibliotecas necessárias com o comando npm install

**Após a instalação, é necessário criar um arquivo na raiz do projeto chamado .env, que deve ser preenchido seguindo o
exemplo do arquivo .env.example.

*** Após isso o comando npm run dev inicia o servidor.


####
******As propriedades name e email são únicas, tanto para usuários quanto para clientes

####

Para criação de usuários, é esperado o seguinte corpo da requisição:

post na Rota:
http://localhost:3000/users

{
	"name":"name",
	"email": "email@mail.com",
	"password":"senha",
	"phoneNumber": "987654321"
}

Retorno:

{
    "id":numero,
	"name":"name",
	"email": "email@mail.com",
	"password":"senha",
	"phoneNumber": "987654321"
    "createdAt": "data"
}
####

Para efetuar o login:

Post na Rota:
http://localhost:3000/login

{
	"email": "email@mail.com",
	"password":"senha",	
}


exemplo de Retorno:

{
	"token": [
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjExMUBtYWlsLmNvbSIsImlhdCI6MTY5MTM4ODgwNiwiZXhwIjoxNjkxNDc1MjA2fQ.GHAn0XYKsxaqYPUG5rzp5OlPHceMKuWLY-PsJIvVHmw",
		{
			"id": 50,
			"name": "111",
			"email": "111@mail.com",
			"password": "$2a$10$WzUbnkZtHFgodtUOX8VeQOiNZUO.FRFYTn3ylnvkDrpPO5.9AU9uq",
			"phoneNumber": "1111",
			"createdAt": "2023-08-07",
			"updatedAt": "2023-08-07",
			"deletedAt": null,
			"client": []
		}
	]
}


####
Para fazer um update do usuário, um patch na rota:

http://localhost:3000/users/id

sendo o id da url o numero de id do usuário a ser atualizado
***é esperado que seja passado o token do próprio usuário logado apra fazer essa requisição


exemplo de requisição:

{
	"name":"sdfgsdfgsfd@mail.com",
	"email": "tsdfgsdfgsfd@mail.com",
	"password":"sdfgsdfgsfd@mail.com",
	"phoneNumber": "sdfgsdfgsfd@mail.com"
}

exemplo de resposta:

{
	"id": 48,
	"name": "sdfgsdfgsfd@mail.com",
	"email": "tsdfgsdfgsfd@mail.com",
	"phoneNumber": "sdfgsdfgsfd@mail.com",
	"createdAt": "2023-08-07"
}


####
Deleção de usuário, um delete na rota:
http://localhost:3000/users/id

sendo o id da url o numero de id do usuário a ser deletado

***é esperado que seja passado o token do próprio usuário logado apra fazer essa requisição

Exemplo dee requisição:

sem body


Retorno:
status 204
sem body

####
para listar o usuário, assim como a sua lista de lieentes, fazer um get na rota:

http://localhost:3000/users/id

sendo o id da url o numero de id do usuário a ser selecionado

***é necessário a utilização de token na requisição para que ela seja funcional.

exemplo de requisição:

sem body

exemplo de resposta:
{
	"id": 45,
	"name": "facil",
	"email": "facil5@mail.com",
	"phoneNumber": "facil",
	"createdAt": "2023-08-07",
	"client": [
		{
			"id": 48,
			"name": "criou messmoaasdfsd3",
			"email": "crioumsmo10@aasdfil123.com",
			"phoneNumber": "crianasdd3a",
			"createdAt": "2023-08-07"
		}
	]
}

####

Para a adição de um cliente a um usuário é necessário um post na rota:

http://localhost:3000/client/id

sendo o id o numero do usuário ao qual o cliente deve ser vinculado

***é necessário o uso de token do mesmo usuário para realizar a requisição

exemplo de requisição:
{
	"name":"criou messmoaasdfsd3",
	"email": "crioumsmo10@aasdfil123.com",
	"phoneNumber": "crianasdd3a"
}

exemplo de retorno:
{
	"id": 45,
	"name": "facil",
	"email": "facil5@mail.com",
	"phoneNumber": "facil",
	"createdAt": "2023-08-07",
	"client": [
		{
			"id": 48,
			"name": "criou messmoaasdfsd3",
			"email": "crioumsmo10@aasdfil123.com",
			"phoneNumber": "crianasdd3a",
			"createdAt": "2023-08-07"
		}
	]
}



####
Para edição de cliente, é necessário um patch na rota:

http://localhost:3000/client/id/user/userId

sendo userId o numero do id do usuário ao qual o cliente pertence
sendo o id o numero de id do cliente ao qual se pretende fazer a alteração
***é necessário a utilização de token do usuário para que a rota funcione

exemplo de requisição:

{
	"name":"lalala",
	"email": "lalalalalalala@mail.com",
	"phoneNumber": "testandopacas",
	"password": "12345"

}
    exemplo de resposta:
{
	"id": 45,
	"name": "lalala",
	"email": "lalalalalalala@mail.com",
	"phoneNumber": "testandopacas",
	"createdAt": "2023-08-07"
}

### 
Para deleção de um cliente é necessário fazer um delete na rota:

http://localhost:3000/client/id/user/userId

sendo userId o numero do id do usuário ao qual o cliente pertence
sendo o id o número do cliente a ser deletado
***é necessário enviar o token do usuário logado para fazer a deleção do cliente

exemplo de requisição:

sem body


rexmplo de resposta:

status 204, sem body


