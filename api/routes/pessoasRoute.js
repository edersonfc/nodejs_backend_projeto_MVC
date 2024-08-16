const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

//Adicionando segurança com Token no Midle
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const segredoJWT = config.password;
const { expressjwt: expressJwt } = require('express-jwt');
const verificaTokenJWT = expressJwt({ secret: segredoJWT, algorithms: ['HS256'] });

const router = Router()

router.get('/pessoas', verificaTokenJWT, PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', verificaTokenJWT,PessoaController.pegaUmaPessoa)
router.post('/pessoas', verificaTokenJWT,PessoaController.criaPessoa)
router.put('/pessoas/:id', verificaTokenJWT,PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', verificaTokenJWT,PessoaController.apagaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId',  verificaTokenJWT,PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', verificaTokenJWT, PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', verificaTokenJWT, PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', verificaTokenJWT, PessoaController.apagaMatricula)

module.exports = router





