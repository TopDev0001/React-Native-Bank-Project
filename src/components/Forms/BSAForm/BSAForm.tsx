import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'react-feather';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReactFlagsSelect from 'react-flags-select';
import { log } from '../../../services';
import Radio from '../Radio/Radio';
import 'react-flags-select/scss/react-flags-select.scss';

import './BSAForm.sass';
import { IBSAForm } from './types';
import { IBSAQuestionnaire } from '../../../store/BsaContextType';
import Input from '../Input/Input';
import Button from '../../Common/Button/Button';

const schema = yup.object().shape({
  usCitizen: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  countryOfOrigin: yup
    .string()
    .when('usCitizen', (usCitizen: string, schemaProxy: any) => {
      if (usCitizen && usCitizen === 'No') {
        return schemaProxy.required('Please enter your coutry of origin');
      }
      return schemaProxy.nullable();
    }),
  milesAway: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  hearAbout: yup
    .string()
    .max(100, 'Hear About can’t have more than 100 characters')
    .when('milesAway', (milesAway: string, schemaProxy: any) => {
      if (milesAway && milesAway === 'No') {
        return schemaProxy.required(
          'Please tell us how you heard about Central Bank'
        );
      }
      return schemaProxy.nullable();
    })
    .matches(/^[a-zA-Z0-9- ']*$/, 'Invalid input'),
  wireTransfersDomestic: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  wireTransfersInternational: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  cashTransactions: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  anotherBank: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  otherBankName: yup
    .string()
    .max(100, 'Name of the bank can’t have more than 100 characters')
    .when('anotherBank', (anotherBank: string, schemaProxy: any) => {
      if (anotherBank && anotherBank === 'Yes') {
        return schemaProxy.required('Please enter the name of your bank');
      }
      return schemaProxy.nullable();
    })
    .matches(/^[a-zA-Z0-9- ']*$/, 'Invalid input'),
  mobileOrATMDeposit: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  individualIncome: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
  householdIncome: yup
    .string()
    .required()
    .oneOf(['Yes', 'No']),
});

const BSAForm: React.FC<IBSAForm> = (props) => {
  const { defaultValues } = props;

  const {
    watch,
    control,
    setValue,
    register,
    handleSubmit,
    errors,
    formState,
  } = useForm<IBSAQuestionnaire>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { onSubmit } = props;
  const history = useHistory();

  const usCitizen = watch('usCitizen', defaultValues.usCitizen);
  const milesAway = watch('milesAway', defaultValues.milesAway);
  const anotherBank = watch('anotherBank', defaultValues.anotherBank);
  defaultValues.hearAbout = 'Yes';
  defaultValues.mobileOrATMDeposit = 'Yes';
  defaultValues.wireTransfersDomestic = 'No';
  defaultValues.wireTransfersInternational = 'No';
  defaultValues.cashTransactions = 'No';

  const onFormSubmit = async (data: IBSAQuestionnaire) => {
    log.info(JSON.stringify(data), 'BSAform');
    onSubmit(data);
  };

  const onSelectFlag = (code: string) => {
    log.info(code, 'onSelectFlag');
    setValue('countryOfOrigin', code, { shouldValidate: true });
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="ni-test prospect-form-card" data-testid="BSAForm">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <section>
          {/* us_citizen */}
          <div className="question-row">
            <p className="question">Are all account owners US citizens?</p>
            <Radio
              data-testid="us_citizen_yes"
              name="usCitizen"
              value="Yes"
              defaultValue="Yes"
              label="Yes"
              ref={register}
            />
            <Radio
              name="usCitizen"
              data-testid="us_citizen_no"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* origin_country */}
          {usCitizen === 'No' && (
            <div className="question-row" data-testid="origin_country">
              <p className="question">What is your country of origin?</p>
              <Controller
                control={control}
                name="countryOfOrigin"
                as={(
                  <ReactFlagsSelect
                    searchable
                    name="select-countryOfOrigin"
                    customLabels={{ LA: 'Loas', VN: 'Vietnam' }}
                    onSelect={onSelectFlag}
                    searchPlaceholder="Search for a country"
                  />
                )}
              />
            </div>
          )}
          {/* miles_away */}
          <div className="question-row">
            <p className="question">
              Does at least one account owner live within 50 miles of Central
              Bank office?
            </p>
            <Radio
              data-testid="miles_away_yes"
              id="yes"
              name="milesAway"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="miles_away_no"
              id="no"
              name="milesAway"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* hear_about */}
          {milesAway === 'Not accessible now' && (
            <div
              className="question-row"
              data-testid="hear_about"
              style={{ visibility: 'hidden' }}
            >
              <p className="question">How did you hear about Central Bank?</p>
              <Input
                autoFocus
                name="hearAbout"
                ref={register}
                errors={errors.hearAbout}
              />
            </div>
          )}
          {/* individual_income */}
          <div className="question-row">
            <p className="question">
              Is your
              {' '}
              <u>individual</u>
              {' '}
              income greater than $35,000?
            </p>
            <Radio
              data-testid="individual_income_yes"
              id="yes"
              name="individualIncome"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="individual_income_no"
              id="no"
              name="individualIncome"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* household_income */}
          <div className="question-row">
            <p className="question">
              Is your
              {' '}
              <u>household</u>
              {' '}
              income greater than $50,000?
            </p>
            <Radio
              data-testid="household_income_yes"
              id="yes"
              name="householdIncome"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="household_income_no"
              id="no"
              name="householdIncome"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* wire_transfers_domestic */}
          <div className="question-row">
            <p className="question">
              Do you anticipate 2 or more domestic wire transfers per month?
            </p>
            <Radio
              data-testid="wire_transfers_domestic_yes"
              id="yes"
              name="wireTransfersDomestic"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="wire_transfers_domestic_no"
              id="no"
              name="wireTransfersDomestic"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* wire_transfers_international */}
          <div className="question-row">
            <p className="question">
              Do you anticipate 1 or more international wire transfers per
              month?
            </p>
            <Radio
              data-testid="wire_transfers_international_yes"
              id="yes"
              name="wireTransfersInternational"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="wire_transfers_international_no"
              id="no"
              name="wireTransfersInternational"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* cash_transactions */}
          <div className="question-row">
            <p className="question">
              Do you expect cash transactions in excess of $2,500 per month?
            </p>
            <Radio
              data-testid="cash_transactions_yes"
              id="yes"
              name="cashTransactions"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="cash_transactions_no"
              id="no"
              name="cashTransactions"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* another_bank */}
          <div className="question-row">
            <p className="question">
              Will you maintain a checking account at another bank?
            </p>
            <Radio
              data-testid="another_bank_yes"
              id="yes"
              name="anotherBank"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="another_bank_no"
              id="no"
              name="anotherBank"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
          {/* other_bank_name */}
          {anotherBank === 'Yes' && (
            <div className="question-row" data-testid="other_bank_name">
              <p className="question">What is the name of the bank?</p>
              <Input
                autoFocus
                name="otherBankName"
                ref={register}
                errors={errors.otherBankName}
              />
            </div>
          )}
          <div className="question-row" style={{ visibility: 'hidden' }}>
            <p className="question">
              Are you planning on using Mobile or ATM Deposits?
            </p>
            <Radio
              data-testid="mobile_or_atm_deposit_yes"
              id="yes"
              name="mobileOrATMDeposit"
              value="Yes"
              label="Yes"
              defaultValue="Yes"
              ref={register}
            />
            <Radio
              data-testid="mobile_or_atm_deposit_no"
              id="no"
              name="mobileOrATMDeposit"
              value="No"
              label="No"
              defaultValue="No"
              ref={register}
            />
          </div>
        </section>

        {Object.keys(errors).length > 0 && (
          <div
            role="alert"
            className="alert toast is-error"
            data-testid="form-errors"
          >
            <AlertCircle />
            {' '}
            Please review the form before continuing.
          </div>
        )}
        <div className="bsa-controls">
          <Button className="back" onClick={goBack}>
            <ArrowLeft color="#444647" />
            Back
          </Button>
          <Button
            disabled={!formState.isValid}
            type="submit"
            className="is-pill is-green"
            data-testid="submit-btn"
          >
            Proceed
          </Button>
        </div>
      </form>
    </div>
  );
};
export default BSAForm;
