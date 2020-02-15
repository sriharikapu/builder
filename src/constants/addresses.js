import { getNetworkVersion } from 'hooks/web3'

export default function getAddresses () {
  const network = getNetworkVersion()

  switch (network) {
    case 1:
      return {
        weth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        wbtc: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        dai: '0x6b175474e89094c44da98b954eedeac495271d0f'
      }
    case 42:
    default:
      return {
        weth: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
        wbtc: '0xe8c015754c5966777bf176127f3cf15f03fa98a2',
        usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        dai: '0x7cedcc5a8344a079ed7863577cf93cd7db80c1b2'
      }
  }
}
