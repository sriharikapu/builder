import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Web3 from 'web3'

export const Web3Context = createContext(undefined)

export function useWeb3Provider (lazy = false) {
  const [web3, setWeb3] = useState(null)
  const enable = useCallback(() => enableWeb3().then(setWeb3), [])

  useEffect(() => {
    if (!lazy) {
      enable()
    }
  }, [lazy, enable])

  return { web3, enable }
}

export async function enableWeb3 () {
  const { ethereum } = window

  if (ethereum) {
    await ethereum.enable()

    ethereum.autoRefreshOnNetworkChange = false
    ethereum.on('networkChanged', () => {
      document.location.reload()
    })

    const web3 = new Web3(ethereum)
    return web3
  }
}

export function useWeb3 () {
  return useContext(Web3Context)
}

export function useDefaultAccount () {
  const [account, setAccount] = useState()
  const { ethereum } = window

  useEffect(() => {
    const _setAccount = accounts => setAccount(accounts[0])

    if (ethereum) {
      _setAccount([ethereum.selectedAddress])
      ethereum.on('accountsChanged', _setAccount)
    }

    return () => {
      ethereum.off('accountsChanged', _setAccount)
    }
  }, [ethereum])

  return account
}

export function getNetworkVersion () {
  const { ethereum } = window

  if (ethereum) {
    return ethereum.networkVersion
  }
}
