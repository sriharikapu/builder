import numeral from 'numeral'

export default function formatNumber (value) {
  return numeral(value).format('0.00', raw => {
    const value = numeral(raw).value()
    const integer = parseInt(value)
    const cents = Math.floor(value - integer)

    return integer + cents
  })
}
