import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render, fireEvent, act, screen
} from '@testing-library/react';
import BSAForm from './BSAForm';

const fillBSAForm = (getByTestId: any) => {
  const usCitizen = getByTestId('us_citizen_yes');
  const milesAway = getByTestId('miles_away_yes');
  const wireTransfersDomestic = getByTestId('wire_transfers_domestic_no');
  const wireTransfersInternational = getByTestId(
    'wire_transfers_international_yes'
  );
  const cashTransactions = getByTestId('cash_transactions_yes');
  const anotherBank = getByTestId('another_bank_no');
  const mobileDeposit = getByTestId('mobile_or_atm_deposit_no');
  const individualIncome = getByTestId('individual_income_no');
  const householdIncome = getByTestId('household_income_yes');

  fireEvent.click(usCitizen);
  fireEvent.click(milesAway);
  fireEvent.click(wireTransfersDomestic);
  fireEvent.click(wireTransfersInternational);
  fireEvent.click(cashTransactions);
  fireEvent.click(anotherBank);
  fireEvent.click(mobileDeposit);
  fireEvent.click(householdIncome);
  fireEvent.click(individualIncome);

  expect(usCitizen.value).toBe('Yes');
  expect(milesAway.value).toBe('Yes');
  expect(wireTransfersDomestic.value).toBe('No');
  expect(wireTransfersInternational.value).toBe('Yes');
  expect(cashTransactions.value).toBe('Yes');
  expect(anotherBank.value).toBe('No');
  expect(mobileDeposit.value).toBe('No');
  expect(householdIncome.value).toBe('Yes');
  expect(individualIncome.value).toBe('No');

  // we are not setting html5 property checked so no point in verifying this
  // expect(usCitizen).toBeChecked()
  // expect(milesAway).toBeChecked()
  // expect(incomeIndividual).toBeChecked()
  // expect(incomeHousehold).toBeChecked()
  // expect(wireTransfersDomestic).not.toBeChecked()
};

describe('AmountForm', () => {
  const defaultBSA = {
    usCitizen: 'No',
    milesAway: 'Yes',
    anotherBank: 'Yes',
    countryOfOrigin: '',
    hearAbout: '',
    wireTransfersDomestic: '',
    wireTransfersInternational: '',
    cashTransactions: '',
    otherBankName: '',
    mobileOrATMDeposit: '',
    individualIncome: '',
    householdIncome: '',
  };

  test('after submitting it should not call if form not filled', async () => {
    const history = createMemoryHistory();
    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <Router history={history}>
        <BSAForm defaultValues={defaultBSA} onSubmit={onSubmit} />
      </Router>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('submit-btn'));
    });
    expect(screen.getByText(/Please review the form /)).toBeTruthy();
  });

  test('after submitting it call onSubmit', async () => {
    const history = createMemoryHistory();
    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <Router history={history}>
        <BSAForm defaultValues={defaultBSA} onSubmit={onSubmit} />
      </Router>
    );
    fillBSAForm(getByTestId);
    await act(async () => {
      fireEvent.submit(getByTestId('submit-btn'));
    });
    expect(onSubmit).toBeCalled();
  });
});
export default fillBSAForm;
