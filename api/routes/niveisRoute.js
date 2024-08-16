const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

//Adicionando segurança com Token no Midle
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const segredoJWT = config.password;
const { expressjwt: expressJwt } = require('express-jwt');
const verificaTokenJWT = expressJwt({ secret: segredoJWT, algorithms: ['HS256'] });

const router = Router()

router
    .get('/niveis', verificaTokenJWT, NivelController.pegaTodosOsNiveis)
    .get('/niveis/:id', verificaTokenJWT, NivelController.pegaUmNivel)
    .post('/niveis', verificaTokenJWT, NivelController.criaNivel)
    .put('/niveis/:id', verificaTokenJWT, NivelController.atualizaNivel)
    .delete('/niveis/:id', verificaTokenJWT, NivelController.apagaNivel)
module.exports = router