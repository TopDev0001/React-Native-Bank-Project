import React from 'react';
import { IBSAQuestionnaire } from '../../../store/BsaContextType';

export interface IBSAForm {
  className?: string
  style?: React.CSSProperties
  defaultValues: IBSAQuestionnaire
  onSubmit: (data: IBSAQuestionnaire) => void
}
