import React, { useState } from 'react'
import { TextInputField } from 'evergreen-ui'

export default function FormField ({ isInvalid, validationMessage, value, onChange, ...props }) {
  const [isDirty, setDirty] = useState(false)
  let invalid = false

  if (typeof isInvalid === 'function') {
    invalid = isInvalid({ value, isDirty, isPristine: !isDirty })
  }

  return (
    <TextInputField
      {...props}
      onChange={event => {
        const newValue = event.target.value

        if (!isDirty && newValue !== value) {
          setDirty(true)
        }

        onChange(newValue)
      }}
      isInvalid={invalid}
      validationMessage={invalid ? validationMessage : null}
    />
  )
}
