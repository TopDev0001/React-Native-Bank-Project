export const createSuccessResponse = {
  id: '018f339a-e828-431d-98bf-a51758f28536',
  status: 'DRAFT',
  productConfigurations: [
    {
      productId: '95554751-51d1-4f37-9785-417ae5251d56',
      initialDeposit: 1099,
      options: [
        {
          key: 'loan_max_value',
          title: 'Loan Max Value',
          category: 'category',
          value: 'Example',
        },
      ],
    },
  ],
  signers: [],
  createdAt: '2021-04-15T14:28:32.604Z',
  statusEmailBody: null,
  statusEmailSubject: null,
  statusUpdatedAt: null,
  statusUpdatedBy: null,
  branch: null,
  branchId: null,
  bsa: { risk: null, score: 0 },
  contract: { uri: null },
  contractDocumentCreatedAt: null,
  contractDocumentEnvelopeStatus: null,
  contractDocumentEnvelopeStatusUpdatedAt: null,
  verificationStatus: { faceStatus: 'PENDING', documentStatus: 'PENDING', addressStatus: 'PENDING' },
}

export const updateSuccessResponse = {
  id: '018f339a-e828-431d-98bf-a51758f28536',
  status: 'DRAFT',
  productConfigurations: [
    {
      productId: '95554751-51d1-4f37-9785-417ae5251d56',
      initialDeposit: 2000,
      options: [
        {
          key: 'loan_max_value',
          title: 'Loan Max Value',
          category: 'category',
          value: 'Example',
        },
      ],
    },
  ],
  signers: [],
  createdAt: '2021-04-15T14:28:32.604Z',
  statusEmailBody: null,
  statusEmailSubject: null,
  statusUpdatedAt: null,
  statusUpdatedBy: null,
  branch: null,
  branchId: null,
  bsa: { risk: null, score: 0 },
  contract: { uri: null },
  contractDocumentCreatedAt: null,
  contractDocumentEnvelopeStatus: null,
  contractDocumentEnvelopeStatusUpdatedAt: null,
  verificationStatus: { faceStatus: 'PENDING', documentStatus: 'PENDING', addressStatus: 'PENDING' },
}

export const updateStatusSuccessResponse = {
  branch: null,
  branchId: null,
  bsa: { risk: null, score: 0 },
  contract: { uri: null },
  contractDocumentCreatedAt: null,
  contractDocumentEnvelopeStatus: null,
  contractDocumentEnvelopeStatusUpdatedAt: null,
  createdAt: '2021-04-15T14:28:32.604Z',
  id: '018f339a-e828-431d-98bf-a51758f28536',
  productConfigurations: [
    {
      productId: '95554751-51d1-4f37-9785-417ae5251d56',
      initialDeposit: 1099,
      options: [
        {
          key: 'loan_max_value',
          title: 'Loan Max Value',
          category: 'category',
          value: 'Example',
        },
      ],
    },
  ],
  signers: [],
  status: 'INCOMPLETE',
  statusEmailBody: null,
  statusEmailSubject: null,
  statusUpdatedAt: null,
  statusUpdatedBy: null,
  verificationStatus: { faceStatus: 'PENDING', documentStatus: 'PENDING', addressStatus: 'PENDING' },
}

export const getSuccessResponse = {
  id: 'a6342816-7e89-4af6-a9e2-f0b22c947086',
  status: 'INCOMPLETE',
  branchId: null,
  signers: [
    {
      role: 'PRIMARY',
      id: 'ebcdeded-b36c-4f84-bdf1-b10a9e12b8cc',
      status: 'PENDING',
      firstName: 'Hichelle',
      middleName: '',
      lastName: 'Obama',
      address: '423432',
      city: '423423',
      state: 'AL',
      zipCode: '43243243',
      phoneNumber: '(342) 342-3423',
      ssn: '342-43-2432',
      email: 'sdaff@gadf.com',
      employer: 'ding',
      dateOfBirth: '1964-01-17',
      emailVerified: false,
      emailVerifiedAt: null,
      consent: true,
      consentAccountOpening: true,
      consentPrivacyPolicy: true,
      consentCommunication: true,
      checkSanction: null,
      sanctionVerifiedAt: null,
      checkPoliticalExposure: null,
      politicalExposureVerifiedAt: null,
      checkAdverseMedia: null,
      adverseMediaVerifiedAt: null,
      checkAntiMoneyLaundering: null,
      antiMoneyLaunderingVerifiedAt: null,
      contractDocumentSignerStatus: null,
      contractDocumentSignerStatusUpdatedAt: null,
      invitedAt: '2021-04-16T09:00:40.208Z',
      idProofDocument: {
        type: 'PASSPORT',
        number: '910239248',
        expirationDate: '2222-12-05',
        issuedDate: '1970-01-01',
        issuer: 'USA',
        frontIdProof: {
          default: 'someimage.png',
        },
        backIdProof: { default: null },
      },
      selfie: {
        default: 'someimage.png',
      },
      verificationStatus: {
        faceStatus: 'PENDING',
        faceUpdatedAt: '2021-04-16T09:00:40.208Z',
        documentStatus: 'PENDING',
        documentUpdatedAt: '2021-04-16T09:00:40.208Z',
        addressStatus: 'PENDING',
        addressUpdatedAt: '2021-04-16T09:00:40.208Z',
        sanctionsStatus: 'PENDING',
        sanctionsUpdatedAt: '2021-04-16T09:00:40.208Z',
        mediaStatus: 'PENDING',
        mediaUpdatedAt: '2021-04-16T09:00:40.208Z',
        politicalExposure: 'PENDING',
        politicalExposureUpdatedAt: '2021-04-16T09:00:40.208Z',
      },
    },
  ],
  createdAt: '2021-04-16T09:00:39.654Z',
  statusUpdatedBy: null,
  statusUpdatedAt: null,
  statusEmailSubject: null,
  statusEmailBody: null,
  contractDocumentCreatedAt: '2021-04-16T09:00:47.815Z',
  contractDocumentEnvelopeStatus: 'CREATED',
  contractDocumentEnvelopeStatusUpdatedAt: '2021-04-16T09:00:47.815Z',
  productConfigurations: [
    {
      productId: '3552ab85-08da-4bb5-be00-9e94d282d310',
      initialDeposit: 0,
      createdAt: '2021-04-16T09:00:39.680Z',
      product: {
        id: '3552ab85-08da-4bb5-be00-9e94d282d310',
        name: 'Simple Checking',
        category: 'CHECKING',
        sku: 'simple-checking',
        summary:
          'Simple checking means no fees with online statements and it means no minimum balance required to maintain the account, access to online banking, bill pay and more. You get the benefits you want.',
        content:
          '<p>Simple checking <strong>lorem ipsum</strong> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n',
        createdAt: '2020-02-06T12:32:03.341Z',
        options: [
          {
            id: null,
            key: 'account_number',
            category: 'account_number',
            title: 'Account Number',
            value: 'DEMO105',
            lead: null,
            annotation: null,
            parentId: null,
          },
        ],
      },
    },
  ],
  branch: null,
  contract: { uri: null },
  verificationStatus: {
    faceStatus: 'PENDING',
    documentStatus: 'PENDING',
    addressStatus: 'PENDING',
    sanctionsStatus: 'PENDING',
    mediaStatus: 'PENDING',
    politicalExposure: 'PENDING',
  },
  bsa: { risk: 'High', score: 7 },
}

export const bsaSucessResponse = [
  { position: 1, questionId: 'usCitizen', answer: 'Yes' },
  { position: 2, questionId: 'countryOfOrigin', answer: null },
  { position: 3, questionId: 'milesAway', answer: 'Yes' },
  { position: 4, questionId: 'hearAbout', answer: null },
  { position: 5, questionId: 'individualIncome', answer: 'Yes' },
  { position: 6, questionId: 'householdIncome', answer: 'Yes' },
  { position: 7, questionId: 'wireTransfersDomestic', answer: 'Yes' },
  { position: 8, questionId: 'wireTransfersInternational', answer: 'Yes' },
  { position: 9, questionId: 'cashTransactions', answer: 'Yes' },
  { position: 10, questionId: 'anotherBank', answer: 'No' },
  { position: 11, questionId: 'otherBankName', answer: null },
  { position: 12, questionId: 'mobileOrATMDeposit', answer: 'Yes' },
]
