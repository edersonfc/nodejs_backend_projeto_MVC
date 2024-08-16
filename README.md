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
npx sequelize-cli db:seed --seed 20240815202032-demo-autenticacaoLogin.js
npx sequelize-cli db:seed --seed 20240705161755-demo-pessoa.js
npx sequelize-cli db:seed --seed 20240701170039-demo-nivel.js
npx sequelize-cli db:seed --seed 20240701170107-demo-turmas.js
npx sequelize-cli db:seed --seed 20240701170115-demo-matriculas.js
```
<br>

#### Subindo o Servidor 
```bash
# Rode o comando Abaixo
npm start
```
<br>

`Créditos` [www.linkedin.com/in/ederson-feliciano-corsatto](www.linkedin.com/in/ederson-feliciano-corsatto)

<br><br>




