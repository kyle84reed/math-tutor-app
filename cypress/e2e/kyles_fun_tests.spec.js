describe('math tutor', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('has the correct title', () => {
          cy.contains('Math Challenge').should('be.visible')
          cy.contains('Addition').should('be.visible')

    it('incorrect answer shows message', function () {
          cy.get('*[class^="mat-form-field-infix ng-tns-c93-0"]').type('000')
          cy.get('*[class^="mat-button-wrapper"]').trigger("click")
          cy.get('*[id^="toast-container"]')
          cy.contains('Sorry, that is not correct. Please try again.').should('be.visible')
      })      
    })  

    it('inputs large amount of characters', function () {
          cy.get('*[class^="mat-form-field-infix ng-tns-c93-0"]').type('34534263456356345635674567456745634590782303453426345635634563567456745674563459078230845723087520388475203478502394582034852938745923875299384750327502347850293452039475029385023948520349576249672546')
          cy.get('*[class^="mat-button-wrapper"]').trigger("click")
          cy.get('*[id^="toast-container"]')
          cy.contains('Sorry, that is not correct. Please try again.').should('be.visible')
      })         

    it('inputs letters', function () {
          cy.get('*[class^="mat-form-field-infix ng-tns-c93-0"]').type('abcdefg')
          cy.get('*[class^="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]').should('be.disabled')
      })


    it('inputs special characters', function () {
          cy.get('*[class^="mat-form-field-infix ng-tns-c93-0"]').type('!@#$%')
          cy.get('*[class^="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]').should('be.disabled')
      })      


    it('verify prompt when leaving the answer field black', function () {
          cy.get('*[class^="mat-form-field-infix ng-tns-c93-0"]')
          cy.get('*[class^="mat-focus-indicator mat-raised-button mat-button-base mat-primary"]').should('be.disabled')
      })      
    })  