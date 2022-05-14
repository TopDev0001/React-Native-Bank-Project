export interface IBSAQuestionnaire {
  usCitizen: string
  countryOfOrigin?: string | null
  milesAway: string
  hearAbout?: string | null
  wireTransfersDomestic: string
  wireTransfersInternational: string
  cashTransactions: string
  anotherBank: string
  otherBankName?: string | null
  mobileOrATMDeposit: string
  individualIncome: string
  householdIncome: string
}
export interface IState {
  results: IBSAQuestionnaire
  error?: string
}
export interface IAction {
  type: 'update' | 'reset'
  bsaQuestionnaire: IBSAQuestionnaire
}
