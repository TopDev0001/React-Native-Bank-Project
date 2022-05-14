import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import {
  render,
  fireEvent,
  waitFor,
  act,
  screen
} from '@testing-library/react';
import StepBSAQuestionnaire from './StepBSAQuestionnaire';
import StepInvites from '../StepInvites/StepInvites';
import { validSigner } from '../../../services/__mocks__/Signer';
import { ProspectProvider, BsaProvider } from '../../../store';
import { LoadingProvider } from '../../../store/LoadingContext';
import {
  initialProductConfiguration,
  mockSelectedProductCD
} from '../../../services/__mocks__/Products';
import fillBSAForm from '../../Forms/BSAForm/BSAForm.test';

// reuse this in several tests
const renderWithProps = (props: any) => {
  const defaultProps = {
    className: 'ni-test',
  };
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <LoadingProvider>
        <ProspectProvider
          initialProviderState={{
            error: undefined,
            status: 'idle',
            signer: validSigner,
            invitees: [],
            products: [initialProductConfiguration],
            accountRequestId: props.accountRequestId,
            selectedProductName: mockSelectedProductCD.name,
            signerId: props.signerId,
            selectedProduct: mockSelectedProductCD,
          }}
        >
          <BsaProvider>
            <div>
              <StepBSAQuestionnaire {...defaultProps} {...props} />
              <Route
                path="/onboarding/invite-signers"
                component={StepInvites}
              />
            </div>
          </BsaProvider>
        </ProspectProvider>
      </LoadingProvider>
    </Router>
  );
};

describe('StepBSAQuestionnaire', () => {
  test('renders without error', async () => {
    renderWithProps({});
    const container = screen.getByTestId('step-bsa-questionnaire');

    await act(async () => {
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass('ni-test');

      const element = screen.getByText(/Please complete our questionnaire/i, {
        selector: 'h1',
      });
      expect(element).toBeInTheDocument();
    });
  });

  describe('Submitting BSA Questionnaire', () => {
    test('after submitting it should go to invite signers step', async () => {
      renderWithProps({});

      await act(async () => {
        fillBSAForm(screen.getByTestId);
      });

      await act(async () => {
        fireEvent.submit(screen.getByTestId('submit-btn'));
      });

      await waitFor(() => {
        const container = screen.getByTestId('StepInvites');
        expect(container).toBeInTheDocument();
      });
    });
  });
});
