import { StepOne, StepTwo, StepThree } from '../components/organisms'

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
  },
  2: {
    mainText: 'a little bit more about you!',
    helperText: '3 more minutes to go',
    title: 'your details',
    component: StepTwo,
    footer: [Button, Button],
    footerLabels: ['previous', 'next'],
    footerStatus: ['lightened', 'default']
  },
  3: {
    mainText: 'about your taste!',
    helperText: 'this is the last step before reviewing your data.',
    title: 'your favorites',
    component: StepThree,
    footer: [Button, Button],
    footerLabels: ['previous', 'next'],
    footerStatus: ['lightened', 'default']
  }
}



