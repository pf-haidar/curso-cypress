///<reference types="cypress" />

describe('Esperas...', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it.only('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Funciona Retry')
    })

    it.only('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        // cy.get('#lista li')
        //     .find('span')
        //     .should('contain', 'Item 2')
        cy.get('#lista li span')
            .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            .should('contain', 'Item 2')

    })

    it.only('Uso do timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo').should('exist')

        // cy.get('#buttonListDOM').click()
        // // cy.wait(5000)
        // cy.get('#lista li span', {timeout: 30000})
        //     .should('contain', 'Item 2')

        cy.get('#buttonListDOM').click()
        cy.get('#lista li span',)
            .should('have.length', 1)
        cy.get('#lista li span',)
            .should('have.length', 2)

    })

    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')
    })

    // Then espera tudo ser executado enquanto
    // o Should fica executando
    it.only('Should vs Then', () => {
        // cy.get('#buttonListDOM').click()
        // cy.get('#lista li span').then($el => {
        //     // .should('have.length', 1)
        //     // console.log(1)
        //     expect($el).to.have.length(1)
        // })

        cy.get('#buttonListDOM').then($el => {
            expect($el).to.have.length(1)
        }).and('have.id', 'buttonListDOM')

    })

})
