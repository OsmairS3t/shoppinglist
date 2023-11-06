export const Unit = [
    { name: 'Kg' },
    { name: 'Pacote(s)' },
    { name: 'Saca(s)' },
    { name: 'Unidade(s)' },
    { name: 'Litro(s)' },
    { name: 'Barra(s)' },
]

export const Type = [
    { name: 'Bebidas' },
    { name: 'Carnes' },
    { name: 'Frutos do Mar' },
    { name: 'Óleos' },
    { name: 'Temperos' },
]

export const Product = [
    {
        id: 'a',
        name: 'Filé Mion',
        unit: 'Unidade(s)',
        price: 45
    },
    {
        id: 'b',
        name: 'Colchão mole',
        unit: 'Kg',
        price: 25
    },
]

export const Buy = [
    {
        id: 'aa',
        type: 'Carnes',
        product: {
            id: 'a',
            name: 'Filé Mion',
            unit: 'Unidade(s)',
            price: 45
        },
        amount: 5,
        price: 250
    },
    {
        id: 'ab',
        type: 'Carnes',
        product: {
            id: 'b',
            name: 'Colchão mole',
            unit: 'Kg',
            price: 25
        },
        amount: 2,
        price: 50
    },
]