const database = require('../models')


const jwt = require('jsonwebtoken');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const segredoJWT = config.password;


class AutenticacaoLoginController {


    static async criaLogin(req, res) {
        const novoLogin = req.body
        try {
            const novoLoginCriado = await database.AutenticacaoLogins(novoLogin)
            return res.status(200).json(novoLoginCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async autenticarLogar(req, res) {

        const { login, senha } = req.query;

        try {
            const loginSenha = await database.AutenticacaoLogins.findOne({
                where: {
                    login: String(login),
                    senha: Number(senha)
                }
            });
            if (!loginSenha) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }
            const dadosToken = {
                id: loginSenha.id,
                login: loginSenha.login
            };
            // const token = jwt.sign(dadosToken, segredoJWT, { expiresIn: '1h' });
            const token = jwt.sign(dadosToken, segredoJWT, {
                expiresIn: '1h',
                algorithm: 'HS256'
            });
            return res.status(200).json({ token });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    }

}

module.exports = AutenticacaoLoginController