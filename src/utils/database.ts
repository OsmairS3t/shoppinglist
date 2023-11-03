export const Unit = [
    { name: 'KG' },
    { name: 'PACOTE(S)' },
    { name: 'SACA(S)' },
    { name: 'UNIDADE(S)' },
    { name: 'LITRO(S)' },
    { name: 'BARRA(S)' },
]

export const Type = [
    { name: 'BEBIDAS' },
    { name: 'CARNES' },
    { name: 'FRUTOS DO MAR' },
    { name: 'OLEOS' },
    { name: 'TEMPEROS' },
]

export const Product = [
    {
        id: 'a',
        name: 'Filé Mion',
        unit: 'UNIDADE(S)',
        price: 45
    },
    {
        id: 'b',
        name: 'Colchão mole',
        unit: 'KG',
        price: 25
    },
]

export const Buy = [
    {
        id: 'aa',
        type: 'CARNES',
        product: {
            id: 'a',
            name: 'Filé Mion',
            unit: 'UNIDADE(S)',
            price: 45
        },
        amount: 5,
        price: 250
    },
    {
        id: 'ab',
        type: 'CARNES',
        product: {
            id: 'b',
            name: 'Colchão mole',
            unit: 'KG',
            price: 25
        },
        amount: 2,
        price: 50
    },
]