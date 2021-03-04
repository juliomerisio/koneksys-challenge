describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('verifies the about setting change language default is English', () => {
  //   cy.findByRole('button', { name: /change language/i }).should('be.visible')
  // })

  it('click open and close modal', () => {
    cy.findByTestId('modal').should('not.visible')

    cy.findByRole('button', { name: /import team/i }).click()

    cy.findByTestId('modal').should('be.visible')

    cy.findByTestId('close-modal').click()

    cy.findByTestId('modal').should('not.visible')
  })

  it('click upload file', () => {
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

  // it('verifies the about setting change language to Español', () => {
  //   cy.findByRole('button', { name: /change language/i }).click()
  //
  //   cy.findByRole('button', {
  //     name: /español/i,
  //   }).click()
  //
  //   cy.findByRole('button', { name: /cambiar idioma/i }).click()
  // })
  // it('verifies the about setting change language to Română', () => {
  //   cy.findByRole('button', { name: /change language/i }).click()
  //
  //   cy.findByRole('button', {
  //     name: /română/i,
  //   }).click()
  //
  //   cy.findByRole('button', { name: /schimba limba/i }).click()
  // })
  //
  // it('verifies theme change to light', () => {
  //   cy.findByRole('button', { name: /change theme/i }).click()
  //
  //   cy.findByRole('button', { name: /light/i }).click()
  //   cy.window().then((window) => {
  //     expect(window.localStorage.getItem('atom:settings')).contains('light')
  //   })
  // })
  // it('verifies theme change to black', () => {
  //   cy.findByRole('button', { name: /change theme/i }).click()
  //
  //   cy.findByRole('button', { name: /black/i }).click()
  //   cy.window().then((window) => {
  //     expect(window.localStorage.getItem('atom:settings')).contains('black')
  //   })
  // })
})
