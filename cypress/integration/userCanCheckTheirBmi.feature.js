

describe('User can check their Bmi', () => {
	it('user can enter weight and height', () => {
		cy.visit('http://localhost:3001')
		cy.contains('BMI Calculator')
		cy.get('#weight').type('80')
		cy.get('#height').type('180')
		cy.get('#Calculate').click()
		cy.get('#results').should('contain', '24.69')
	})
})
