import { useEffect, useState } from 'react'
import { useWeb3 } from './web3'

export default function useSuggestedExpirationBlock (blocksAhead = 0) {
  const web3 = useWeb3()
  const [suggested, setSuggested] = useState(null)

  useEffect(() => {
    if (web3) {
      web3.eth.getBlockNumber().then(blockNumber => setSuggested(blockNumber + blocksAhead))
    }
  }, [web3, blocksAhead])

  return suggested
}
