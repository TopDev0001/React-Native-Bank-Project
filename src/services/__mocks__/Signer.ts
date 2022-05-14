export const successUpdate = {
  role: 'PRIMARY',
  id: 'b60d34da-5337-4920-bea7-af32b6bac928',
  firstName: 'Test',
  middleName: 'Heee',
  lastName: '123',
  address: '123',
  city: '1231',
  state: '1231',
  zipCode: '123',
  employer: 'Singular',
  phoneNumber: '123123',
  step: 'IMAGES_UPLOADED',
  ssn: '2222',
  email: '13@we.pt',
  dateOfBirth: '1990-03-12',
  consent: true,
  identityVerificationStatus: null,
  identityVerified: null,
}

export const embedURLSuccess = {
  url: 'http://localhost:3000/mocks/embed.html',
  ttl: 3600,
}

export const errorUpdate = {
  statusCode: 400,
  message: 'Computer says no',
}

export const errorUnexpected = {
  statusCode: 500,
  message: 'Something unexpected happened!',
}

export const emptySigner = {
  id: '',
  firstName: null,
  middleName: null,
  lastName: null,
  dateOfBirth: null,
  phoneNumber: null,
  email: null,
  address: null,
  city: null,
  state: null,
  zipCode: null,
  employer: null,
  ssn: null,
  documentType: null,
  documentNumber: null,
  documentExpirationDate: null,
  documentIssuedDate: null,
  documentIssuer: null,
  selfieDocumentId: null,
  consent: true,
  consentAccountOpening: true,
  consentPrivacyPolicy: true,
  consentCommunication: true,
}

export const validSigner = {
  id: '',
  firstName: 'John',
  middleName: 'M',
  lastName: 'Doe',
  role: 'PRIMARY',
  dateOfBirth: '1980-12-12',
  phoneNumber: '3234567890',
  email: 'psousa+2@wearesingular.com',
  address: 'test 123',
  city: 'lisbon',
  state: 'CA',
  zipCode: '12300',
  employer: 'Singular',
  ssn: '222-22-2123',
  documentType: 'USDL',
  documentNumber: '2222222',
  documentExpirationDate: '2021-12-12',
  documentIssuedDate: '2001-12-12',
  documentIssuer: 'WY',
  selfieDocumentId: 'someselfieID',
  consent: true,
  consentAccountOpening: true,
  consentPrivacyPolicy: true,
  consentCommunication: true,
}

export const identityInformationSuccess = {
  firstName: 'John',
  middleName: null,
  lastName: 'Doe',
  address: 'Rua Rodrigues Faria',
  city: 'Lisbon',
  state: 'CA',
  zipCode: '50000',
  dateOfBirth: '1980-03-12',
  documentNumber: '33333333',
  phoneNumber: '4444444444',
  ssn: '122222222',
  documentExpirationDate: '2022-12-12',
  documentIssuedDate: '2000-12-12',
  documentIssuer: 'FL',
}

export const postToCreateProspectSuccess = {
  id: '06b68e07-ef90-48c4-bf7d-1ecb74d0a3ba',
  institutionId: 'f1f34235-bcaf-4429-8d4f-646b961d0d80',
  createdAt: null,
  products: [
    { productId: '84a14b4a-64b4-4693-bbcc-a9278a336977', initialDeposit: 0, createdAt: '2021-02-05T16:40:30.193Z' },
  ],
  signer: {
    id: '2007a083-2803-48b4-96a5-e9c907e93ad0',
    firstName: 'LAWRENCE',
    middleName: '',
    lastName: 'BURCH',
    dateOfBirth: '1964-05-26T00:00:00.000Z',
    email: 'psousa+0019@wearesingular.com',
    phoneNumber: '(222) 333-3333',
    address: '625 SE 30TH AVE APT C',
    city: 'Portland',
    state: 'OR',
    zipCode: '972143195',
    employer: 'Teste',
    ssn: '666-04-4778',
    consent: true,
    consentAccountOpening: true,
    consentPrivacyPolicy: true,
    consentCommunication: true,
    selfieDocumentId: 'b9464596-73af-4227-9853-c1aff6cedd16',
    idProofDocument: {
      number: '529YY2415',
      expirationDate: '2050-01-28T00:00:00.000Z',
      issuedDate: '2016-08-12T00:00:00.000Z',
      issuer: 'KS',
      frontDocumentId: 'ef67b3e0-a1ed-4460-b4d6-592ddcc925ec',
      backDocumentId: '859acfee-4a86-4bae-8495-2bc713a73d0e',
    },
  },
  invitees: [],
  bsaRiskResults: [
    { position: 1, questionId: 'usCitizen', answer: 'Yes' },
    { position: 2, questionId: 'countryOfOrigin', answer: null },
    { position: 3, questionId: 'milesAway', answer: 'No' },
    { position: 4, questionId: 'hearAbout', answer: 'Twitter' },
    { position: 5, questionId: 'individualIncome', answer: 'Yes' },
    { position: 6, questionId: 'householdIncome', answer: 'Yes' },
    { position: 7, questionId: 'wireTransfersDomestic', answer: 'Yes' },
    { position: 8, questionId: 'wireTransfersInternational', answer: 'Yes' },
    { position: 9, questionId: 'cashTransactions', answer: 'Yes' },
    { position: 10, questionId: 'anotherBank', answer: 'Yes' },
    { position: 11, questionId: 'otherBankName', answer: 'Gotham Bank' },
    { position: 12, questionId: 'mobileOrATMDeposit', answer: 'Yes' },
  ],
}
export const putToEmailVerificationSuccess = {
  statusCode: 200,
  message: 'Success',
}

/* TODO: The mocks below this line need to be reviewed. I cannot garantee they are up to date */

export const putToUpdateProspectSuccess = {
  firstName: 'John',
  middleName: 'M',
  lastName: 'Doe',
  dateOfBirth: '1980-12-12',
  phoneNumber: '111',
  email: 'psousa+2@wearesingular.com',
  address: 'test 123',
  city: 'lisbon',
  state: 'lisbon',
  zipCode: '12300',
  ssn: '123',
  documentNumber: '222',
  documentExpirationDate: '1980-12-12',
  documentIssuedDate: '1980-12-12',
  consent: true,
  idProofDocument: {
    number: '123-123',
    expirationDate: 'date',
    issuedDate: 'date',
    frontDocumentId: 'uuid',
    backDocumentId: 'uuid',
  },
}

export const prospectSignerSigned = {
  id: '00000000-9999-aaaa-0000-2ea08a01e903',
  selfieDocumentId: 'a74f9092-5889-430a-9c19-6712f9f68090',
  firstName: 'John',
  middleName: 'MF',
  lastName: 'McClane',
  dateOfBirth: '1955-05-22T00:00:00.000Z',
  email: 'john.mf.mcclane@wearesingular.com',
  phoneNumber: '+1718-953-8465',
  address: '1381 Atlantic Ave, Brooklyn',
  city: 'New York',
  state: 'NY',
  zipCode: 'NY11216',
  ssn: '111-22-3333',
  employer: 'New York Police Dep.',
  consent: true,
  idProofDocument: {
    frontDocumentId: 'a74f9092-5889-430a-9c19-6712f9f68090',
    backDocumentId: 'a74f9092-5889-430a-9c19-6712f9f68090',
    number: '1231231230',
    issuer: 'WY',
    issuedDate: '2000-11-22T00:00:00.000Z',
    expirationDate: '2030-11-22T00:00:00.000Z',
  },
  consentAccountOpening: true,
  consentPrivacyPolicy: true,
  consentCommunication: false,
}

export const prospectSignerInvited = {
  id: '00000000-9999-aaaa-0000-2ea08a01e903',
  firstName: null,
  middleName: null,
  lastName: null,
  dateOfBirth: null,
  email: 'signer-invited03@nimblefi.com',
  phoneNumber: null,
  address: null,
  city: null,
  state: null,
  zipCode: null,
  employer: null,
  ssn: null,
  consent: false,
  consentAccountOpening: false,
  consentPrivacyPolicy: false,
  consentCommunication: false,
  selfieDocumentId: null,
  idProofDocument: {
    number: null,
    expirationDate: null,
    issuedDate: null,
    issuer: null,
    frontDocumentId: null,
    backDocumentId: null,
  },
}

export const prospectInvitedErrorFinished = {
  statusCode: 412,
  message: 'Account status is not correct.',
}
