const bodyParser = require('body-parser')
 
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')
const autenticacaoLogin = require('./autenticacaoLoginRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   pessoas,
   niveis,
   turmas,
   autenticacaoLogin
   )
 }
