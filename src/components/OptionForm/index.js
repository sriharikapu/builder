import React, { useState } from 'react'
import { Button, SelectField, TextInputField } from 'evergreen-ui'
import { FormField } from 'components'
import getAddresses from 'constants/addresses'

export default function OptionForm ({ onSubmit, isSubmitting }) {
  const [underlyingAsset, setUnderlyingAsset] = useState('weth')
  const [strikeAsset, setStrikeAsset] = useState('dai')
  const [strikePrice, setStrikePrice] = useState(200)
  const [optionName, setOptionName] = useState('')
  const [optionSymbol, setOptionSymbol] = useState('')

  const formData = {
    underlyingAsset,
    strikeAsset,
    strikePrice,
    optionName,
    optionSymbol
  }

  const suggestedName = suggestName(formData)
  const suggestedSymbol = suggestSymbol(formData)

  return (
    <form onSubmit={event => {
      event.preventDefault()

      const data = { ...formData }
      data.underlyingAsset = getTokenAddress(data.underlyingAsset)
      data.strikeAsset = getTokenAddress(data.strikeAsset)

      if (!data.optionName) {
        data.optionName = suggestedName
      }

      if (!data.optionSymbol) {
        data.optionSymbol = suggestedSymbol
      }

      onSubmit(data)
    }}
    >
      <SelectField
        label='Underlying asset'
        isRequired
        value={underlyingAsset}
        onChange={event => setUnderlyingAsset(event.target.value)}
      >
        <option value='weth'>Ether</option>
        <option value='wbtc'>Bitcoin</option>
      </SelectField>

      <SelectField
        label='Strike asset'
        isRequired
        value={strikeAsset}
        onChange={event => setStrikeAsset(event.target.value)}
      >
        <option value='dai'>DAI</option>
        <option value='usdc'>USDC</option>
      </SelectField>

      <TextInputField
        label='Strike price'
        isRequired
        type='tel'
        placeholder='0.00'
        min={0}
        value={strikePrice}
        onChange={event => {
          const value = event.target.value.replace(/(^.*?\.\d{2}).*?$/, '$1')
          setStrikePrice(value)
        }}
        onKeyPress={e => {
          const charCode = e.which ? e.which : e.keyCode

          // Prevent 'minus' character
          if (charCode === 45) {
            e.preventDefault()
            e.stopPropagation()
          }
        }}
      />

      <FormField
        label='Option name'
        isRequired
        placeholder={suggestedName}
        value={optionName}
        onChange={setOptionName}
      />

      <FormField
        label='Option symbol'
        isRequired
        placeholder={suggestedSymbol}
        value={optionSymbol}
        onChange={setOptionSymbol}
      />

      <Button appearance='primary' type='submit' isLoading={isSubmitting}>
        {isSubmitting ? 'Creating Option' : 'Create Option'}
      </Button>
    </form>
  )
}

function suggestName (data) {
  return `${data.underlyingAsset.replace(/^w/, '')} ${data.strikeAsset} ${parseFloat(data.strikePrice) || 0}`.toUpperCase()
}

function suggestSymbol (data) {
  return `${data.underlyingAsset.replace(/^w/, '')}:${data.strikeAsset}:${parseFloat(data.strikePrice) || 0}`.toUpperCase()
}

function getTokenAddress (asset) {
  const addresses = getAddresses()
  return addresses[asset]
}
