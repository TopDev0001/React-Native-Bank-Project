import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { log } from '../../../services';
import { LoadingContext } from '../../../store/LoadingContext';

import { useBsa } from '../../../store';
import { IStepBSAQuestionnaire } from './types';
import StepBsaQuestionnaireView from './StepBsaQuestionnaireView';
import { IBSAQuestionnaire } from '../../../store/BsaContextType';

const StepBSAQuestionnaire: React.FC<IStepBSAQuestionnaire> = (props) => {
  const history = useHistory();
  const { setLoading } = useContext(LoadingContext);
  const { bsa, updateBsa } = useBsa();

  const handleSubmit = async (data: IBSAQuestionnaire) => {
    setLoading(true);
    log.info(JSON.stringify(data), 'StepBSAQuestionnaire');
    await updateBsa(data);
    setLoading(false);

    history.push('/onboarding/invite-signers');
  };

  return (
    <StepBsaQuestionnaireView bsa={bsa} handleSubmit={handleSubmit} props={props} />
  );
};
export default StepBSAQuestionnaire;
