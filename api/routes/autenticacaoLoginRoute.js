const { Router } = require('express')
const AutenticacaoLoginController = require('../controllers/AutenticacaoLoginController')


//Adicionando segurança com Token no Midle
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const segredoJWT = config.password;
const { expressjwt: expressJwt } = require('express-jwt');
const verificaTokenJWT = expressJwt({ secret: segredoJWT, algorithms: ['HS256'] });


const router = Router()

router.post('/criarlogin', verificaTokenJWT, AutenticacaoLoginController.criaLogin)
router.get('/autenticacao', AutenticacaoLoginController.autenticarLogar)

module.exports = router