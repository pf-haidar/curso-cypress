const buildEnv = () => {
    cy.server()
    cy.route({
        method: 'POST',
        url: '/signin',
        response: {
            id: 1000,
            nome: 'Usuario Falso',
            token: 'Uma String muito grande que não deveria ser aceito, mas na verdade vai'
        }
    }).as('signin')

    cy.route({
        method: 'GET',
        url: '/saldo',
        response: [{
            conta_id: 999,
            conta: 'Conta falsa 1',
            saldo: '100'
        },
        {
            conta_id: 99909,
            conta: 'Conta falsa 2',
            saldo: '1000000000'
        },]
    }).as('saldo')

    cy.route({
        method: 'GET',
        url: '/contas',
        response: [
            { id: 1, nome: 'Carteira', visivel: true, usuario_id: 1 },
            { id: 2, nome: 'Banco', visivel: true, usuario_id: 1 },
        ]
    }).as('contas')

    
}

export default buildEnv