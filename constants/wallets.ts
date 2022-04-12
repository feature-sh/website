export type Wallet = {
  logoUrl: string
  name: string
  description: string
}

export const wallets: Wallet[] = [
  {
    name: 'Torus',
    description: 'execute_block_1_torus_description',
    logoUrl: '/wallets/torus.svg',
  },
  {
    name: 'Wallet Connect',
    description: 'execute_block_1_wallet_connect_description',
    logoUrl: '/wallets/wallet-connect.svg',
  },
  {
    name: 'Metamask',
    description: 'execute_block_1_metamask_description',
    logoUrl: '/wallets/metamask.svg',
  },
  {
    name: 'Fortmatic',
    description: 'execute_block_1_fortmatic_description',
    logoUrl: '/wallets/fortmatic.svg',
  },
]
