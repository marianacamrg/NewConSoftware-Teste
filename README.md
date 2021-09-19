# Teste para a Admissão na empresa NewCon Software

## Requisitos usados no desenvolvimento do projeto

```
Editor: Visual Studio Code
VS 2019


React com TypeScript
.NET Core 5.0
MySQL

```

# Instruções para iniciar o projeto e realizar o teste

### Clonar repositório para o seu computador

```
Link: https://github.com/marianacamrg-fatectq/NewConSoftware-Teste

Acessar a pasta principal NewConSoftware-Teste
```


## Banco de Dados

```

* Para ter o acesso você precisa alterar o arquivo appsettings.json e trocar o pwd="suasenha" para a senha local do seu Banco de Dados 

Para sincronizar e criar o banco de dados com as tabelas acessar o diretório:

cd NewConSoftware-Teste\backend\backend

rodar o comando:

`$ dotnet ef database update`

O banco será criado junto com as tabelas, configurado para inserir 3 registros para melhorar a visualização.

```

## Backend

C# - .NET Core 5.0

```
Acessar o diretório:

cd teste-pratico-newcon-software\backend\backend

Você precisará rodar o comando abaixo pelo editor Visual Studio Code para iniciar a API.

`$ dotnet run`

O projeto deverá iniciar na porta padrão 5001.

```

## Frontend

Foi utilizado o React com o TypeScript

```
Antes de iniciar o projeto, você precisará instalar as dependências, acesse a página através do terminal:

cd teste-pratico-newcon-software\frontend\

Rode o comando abaixo para instalar dependências:

npm install

Após baixado as dependências necessárias, para iniciar o projeto use o comando:

npm start

Após isso o projeto irá rodar em seu navegador.

Observação: após salvar o novo ponto, volte para a página principal e pesquise por ele.
```


# Observações sobre a realização do projeto

```
No backend realizei o possível com os conhecimentos adquiridos em um curso da Alura e alguns links de auxilio citados mais abaixo.

No frontend foi realizado a implantação dos campos como sugerido no arquivo do teste. 
    Foi utilizado o Yup para validar os dados que o projeto consome e manipula.
    Foi utilizado também o React-Toastify para notificar erros e avisos, como por exemplo erro ao salvar.
    Foi utilizado também o Formik para o formulário, ele auxilia e deixa descomplicado os valores de dentro e fora dos estados, possui validação e mensagem de erro como - Insira o nome -.

Para a ligação do backend com o frontend foi utilizado o Axios.
```

# Links de apoio para a realização

https://www.npmjs.com (Utilizei como apoio para baixar os pacotes)
https://www.youtube.com/watch?v=DsN83XP9JEY (Utilizei esse vídeo como apoio para aprender a consumir dados de uma API (backend) com o Axios no React)
https://www.youtube.com/watch?v=3pS-oRn9LTk & https://reactrouter.com/web/guides/quick-start (Utilizei para relembrar maneiras de usar o React Router)
https://cursos.alura.com.br/course/react-hooks-e-formularios (Utilizei como auxilio para relembrar sobre o Hooks e formulários)

Links de auxilio para o banco de dados:
https://stackoverflow.com/questions/54325397/how-to-connect-mysql-database-to-reactjs-app
https://dev.to/nasreenkhalid/simple-react-js-and-mysql-integration-crud-app-backend-5aom
https://www.udemy.com/share/103Pju/

Formik - https://formik.org/docs/overview
```