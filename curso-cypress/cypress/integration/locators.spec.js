///<reference types="cypress" />


describe('Work with locators', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Using jquery selector', () => {
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click()
        cy.get("[onclick*='Francisco']")
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0) ~td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')
    })

    //Algumas buscas estão depreciadas
    it('Using xpath', () => {
        cy.xpath('//input[contains(@onclick, \'Francisco\')]')
        // cy.xpath("//table[@id='tableUsuarios']//td[contains(., 'Francisco')]/..//input[@type='text']")
        // cy.xpath("(//table[@id='tableUsuarios']//td[contains(., 'Doutorado')])[2]/..//input[@type='text']")
        cy.xpath("//td[contains(., 'Usuario A')]/following-sibling::td[contains(., 'Mestrado')]/..//input[@type='text']").type('funciona')
    })
})