import CoreAPI from './CoreAPI';
import { IBSAQuestionnaire } from '../store/BsaContextType';
import { IAccountRequest } from './types';

/* Logic for creating and retrieving AccountRequest information from core api */
class AccountRequest extends CoreAPI {
  public async createAccountRequest(accountRequest: IAccountRequest) {
    return await this.postRequest('/account-requests', accountRequest, true);
  }

  /* Update Account Request */
  public async updateAccountRequest(
    token: string,
    id: string,
    accountRequest: { status: string }
  ) {
    this.setAuthenticationHeader(token);
    return await this.putRequest(`/account-requests/${id}`, accountRequest);
  }

  /* Get Account Request */
  public async getAccountRequest(token: string, accountRequestId: string) {
    this.setAuthenticationHeader(token);
    return await this.getRequest(`/account-requests/${accountRequestId}`);
  }

  /* Upsert the BSA Questionnaire results by account request Id */
  public async createBSAQuestionnaire(
    token: string,
    id: string,
    bsa: IBSAQuestionnaire
  ) {
    this.setAuthenticationHeader(token);
    const bsaRiskResults = this.formatQuestionnaireResults(bsa);
    return await this.postRequest(
      `/account-requests/${id}/bsa-risk-results`,
      bsaRiskResults
    );
  }

  /**
   * Convert between bsa from our state to the bsaRiskResults format which the api needs
   * @param bsa - IBSAQuestionnaire
   */
  public formatQuestionnaireResults(bsa: IBSAQuestionnaire) {
    // Maybe there's a magic way to speed this up, maybe not.
    return [
      {
        position: 1,
        questionId: 'usCitizen',
        answer: bsa.usCitizen,
      },
      {
        position: 2,
        questionId: 'countryOfOrigin',
        answer: bsa.countryOfOrigin || null,
      },
      {
        position: 3,
        questionId: 'milesAway',
        answer: bsa.milesAway,
      },
      {
        position: 4,
        questionId: 'hearAbout',
        answer: bsa.hearAbout || null,
      },
      {
        position: 5,
        questionId: 'individualIncome',
        answer: bsa.individualIncome || null,
      },
      {
        position: 6,
        questionId: 'householdIncome',
        answer: bsa.householdIncome || null,
      },
      {
        position: 7,
        questionId: 'wireTransfersDomestic',
        answer: bsa.wireTransfersDomestic,
      },
      {
        position: 8,
        questionId: 'wireTransfersInternational',
        answer: bsa.wireTransfersInternational,
      },
      {
        position: 9,
        questionId: 'cashTransactions',
        answer: bsa.cashTransactions,
      },
      {
        position: 10,
        questionId: 'anotherBank',
        answer: bsa.anotherBank,
      },
      {
        position: 11,
        questionId: 'otherBankName',
        answer: bsa.otherBankName || null,
      },
      {
        position: 12,
        questionId: 'mobileOrATMDeposit',
        answer: bsa.mobileOrATMDeposit,
      },
    ];
  }
}

export default new AccountRequest();
