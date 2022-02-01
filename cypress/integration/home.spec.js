/// <reference types="Cypress" />

describe('Home test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Home is working', () => {
    cy.contains('Controla la salud y cuidado de tu mascota')
  })

})

describe('Home redirect to signUp', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('SignUp is working', () => {
    cy.contains('Registrarse').dblclick()
    cy.location('pathname').should('eq', '/register')
  })

})

describe('Home redirect to services', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Services is working', () => {
    cy.contains('Ver servicios').dblclick()
    cy.location('pathname').should('eq', '/services')
  })

})

describe('Home redirect to pets', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Pets require login', () => {
    cy.contains('Mis mascotas').dblclick()
    cy.location('pathname').should('eq', '/login')
  })

})
