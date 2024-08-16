const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

//Adicionando segurança com Token no Midle
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const segredoJWT = config.password;
const { expressjwt: expressJwt } = require('express-jwt');
const verificaTokenJWT = expressJwt({ secret: segredoJWT, algorithms: ['HS256'] });

const router = Router()

router
    .get('/turmas', verificaTokenJWT, TurmaController.pegaTodasAsTurmas)
    .get('/turmas/:id', verificaTokenJWT, TurmaController.pegaUmaTurma)
    .post('/turmas', verificaTokenJWT, TurmaController.criaTurma)
    .put('/turmas/:id', verificaTokenJWT, TurmaController.atualizaTurma)
    .delete('/turmas/:id', verificaTokenJWT, TurmaController.apagaTurma)
module.exports = router