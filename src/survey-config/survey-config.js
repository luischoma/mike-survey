import { StepOne, StepTwo, StepThree, StepFour } from '../components/organisms'

import { Button } from '../components/atoms'

export const SURVEY_QUESTIONS = {
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
  },
  4: {
    mainText: 'thank you for taking the survey!',
    helperText: 'take a moment to review your data before finishing.',
    title: 'your summary',
    component: StepFour,
    footer: [Button, Button],
    footerLabels: ['previous', 'submit'],
    footerStatus: ['lightened', 'special']
  }
}



export const INITIAL_STATE = {
  1: {
    name: '',
    email: ''
  },
  2: {
    gender: 'prefer not to respond',
    age: '18'
  },
  3: {
    book: '',
    colors: {
      yellow: false,
      green: false,
      black: false,
      red: false,
      pink: false,
      blue: false,
      orange: false,
      white: false,
    }
  }
}