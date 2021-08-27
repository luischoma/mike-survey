import { StepOne } from '../components/organisms'

import { Button } from '../components/atoms'

export const SURVEY_CONFIG = {
  1: {
    mainText: 'we want to know you better!',
    helperText: 'this survey won\'t take more than 5 minutes',
    title: 'your identity',
    component: StepOne,
    footer: [Button, Button],
    footerLabels: ['previous', 'next'],
    footerStatus: ['deactivated', 'default']
  }
}



