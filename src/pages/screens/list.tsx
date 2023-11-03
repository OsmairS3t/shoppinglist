import React, { useState } from 'react';
import { IBuy, IProduct } from '@/utils/interface';
import { Buy, Type } from '@/utils/database';

import styles from '../../styles/List.module.css';

export default function List() {
    const [buy, setBuy] = useState<IBuy[]>(Buy);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Lista de Compras</div>
            {/* {
                Type.map(t => (
                    const listBuy = buy.filter(b => b.type === t.name)
                    listBuy && <div>{t.name}</div>
                ))
            } */}

            {buy.map(b => (
                <div className={styles.product}>
                    <div><input type='checkbox' /></div>
                    <div>{b.product.name}</div>
                    <div>{b.amount} ({b.product.unit})</div>
                </div>
            ))}
        </div>
    )

}

