export type Chain = {
    name: string;
    description: string;
    logoUrl: string;
}

export const chains: Chain[] = [
    {
        name: 'Polygon',
        description: 'execute_block_2_polygon_description',
        logoUrl: '/chains/polygon.svg'
    },
    {
        name: 'Gnosis Chain',
        description: 'execute_block_2_gnosis_description',
        logoUrl: '/chains/gnosis.svg'
    },
    {
        name: 'Arbitratum One',
        description: 'execute_block_2_arbitratum_description',
        logoUrl: '/chains/arbitratum.svg'
    }
]