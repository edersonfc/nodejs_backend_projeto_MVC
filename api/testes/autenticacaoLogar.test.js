const { autenticarLogar } = require('../controllers/AutenticacaoLoginController'); 

// npm install --save-dev jest
// npm test

describe('autenticarLogar', () => {
    let req, res;

    beforeEach(() => {
        req = {
            query: {
                login: 'Edersonfc7',
                senha: '12345'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    it('deve retornar um token válido quando as credenciais são válidas', async () => {
        // Mock da função findOne para simular um retorno de login válido
        const loginSenhaMock = {
            // id: 1,
            login: 'Edersonfc7',
            senha: '12345'
        };
        const findOneMock = jest.fn().mockResolvedValue(loginSenhaMock);
        const databaseMock = {
            AutenticacaoLogins: {
                findOne: findOneMock
            }
        };

        // Executando a função com o mock do database
        await autenticarLogar({ ...req, database: databaseMock }, res);

        // Verificando se a função retornou um token
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ token: expect.any(String) }));
    });

    it('deve retornar erro 401 quando as credenciais são inválidas', async () => {
        // Mock da função findOne para simular um retorno de login inválido
        const findOneMock = jest.fn().mockResolvedValue(null);
        const databaseMock = {
            AutenticacaoLogins: {
                findOne: findOneMock
            }
        };

        // Executando a função com o mock do database
        await autenticarLogar({ ...req, database: databaseMock }, res);

        // Verificando se a função retornou status 401 e o erro correspondente
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ error: 'Credenciais inválidas' });
    });

    it('deve retornar erro 500 quando ocorre um erro no banco de dados', async () => {
        // Mock da função findOne para simular um erro no banco de dados
        const findOneMock = jest.fn().mockRejectedValue(new Error('Erro no banco de dados'));
        const databaseMock = {
            AutenticacaoLogins: {
                findOne: findOneMock
            }
        };

        // Executando a função com o mock do database
        await autenticarLogar({ ...req, database: databaseMock }, res);

        // Verificando se a função retornou status 500 e o erro correspondente
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Erro no banco de dados' });
    });
});
