import React from 'react';
import { IBSAQuestionnaire, IState } from '../../../store/BsaContextType';

export interface IStepBSAQuestionnaire {
  className?: string
  style?: React.CSSProperties
}

export interface IStepBsaQuestionnaireView {
  props: React.PropsWithChildren<IStepBSAQuestionnaire>
  bsa: IState
  handleSubmit(data: IBSAQuestionnaire): Promise<void>
}
