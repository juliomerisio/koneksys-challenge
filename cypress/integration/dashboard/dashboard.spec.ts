describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('click open and close modal', () => {
    cy.findByTestId('modal').should('not.visible')

    cy.findByRole('button', { name: /import team/i }).click()

    cy.findByTestId('modal').should('be.visible')

    cy.findByTestId('close-modal').click()

    cy.findByTestId('modal').should('not.visible')
  })

  it('happy path', () => {
    cy.findByRole('button', { name: /import team/i }).click()

    cy.findByRole('button', { name: /continue/i }).should('be.disabled')

    cy.get('[data-cy="file-input"]').attachFile('buccaneers.csv')

    cy.findByText(/team name/i).should('be.visible')

    cy.findByRole('textbox', { name: /team name/i }).type('Banana')

    cy.findByRole('button', { name: /continue/i }).should('not.be.disabled')

    cy.findByRole('button', { name: /continue/i }).click()

    cy.findByRole('button', { name: /continue/i }).click()

    cy.findByRole('button', { name: /continue/i }).should('be.disabled')

    cy.findByRole('radio', { name: /favorite-Rob Gronkowski/i }).click({
      force: true,
    })

    cy.findByRole('button', { name: /continue/i }).should('not.be.disabled')

    cy.findByRole('button', { name: /continue/i }).click()

    cy.findByText(/buccaneers.csv/i).should('be.visible')

    cy.findByText(/Rob Gronkowski/i).should('be.visible')

    cy.findByRole('button', { name: /continue/i }).click()

    cy.findByTestId('modal').should('not.visible')

    cy.findByTestId('table').should('be.visible')
  })

  it('sad path', () => {
    cy.findByRole('button', { name: /Import team/i }).click()

    cy.findByRole('button', { name: /continue/i }).should('be.disabled')

    cy.get('[data-cy="file-input"]').attachFile('missing-field.csv')

    cy.contains('Missing Value').should('be.visible')

    cy.findByLabelText(/Re-upload file/i)
  })
})
