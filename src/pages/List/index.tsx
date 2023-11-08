import React, { useState } from 'react';
import { IBuy } from '@/utils/interface';
import { Buy, Type } from '@/utils/database';

import { Container, Title, TypeName, Product } from './styles'

export default function List() {
    const [buy, setBuy] = useState<IBuy[]>(Buy);
    const [list, setList] = useState<IBuy[]>([]);

    return (
        <Container>
            <Title>Lista de Compras</Title>
            {
                Type.map(t => (
                    <TypeName key={t.name}>{t.name}
                        {
                            buy.filter(bu => bu.type === t.name).map(b => (
                                <Product key={b.id}>
                                    <div><input id={b.id} type='checkbox' /></div>
                                    <label htmlFor={b.id}>
                                        {b.product.name} {b.amount} ({b.product.unit})
                                    </label>
                                </Product>
                            ))
                        }
                    </TypeName>
                ))
            }
        </Container>
    )

}

