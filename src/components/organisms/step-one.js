import React from 'react'

import { PageDescription, PageTitle, TextInput } from '../atoms'
import { BaseInput } from '../molecules/base-input'

export const StepOne = () => {
  return (

    <div>
      <PageDescription description="we want to know you better!" descriptionHelper="this survey won't take more than 5 minutes." />
      <PageTitle title="your identity" />
      <BaseInput>
        <TextInput textLabel="name" optional />
      </BaseInput>
      <BaseInput>
        <TextInput textLabel="e-mail" optional />
      </BaseInput>
    </div>
  )
}
