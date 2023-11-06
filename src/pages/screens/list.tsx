import React, { useState } from 'react';
import { IBuy, IProduct } from '@/utils/interface';
import { Buy, Type } from '@/utils/database';

import styles from '../../styles/List.module.css';

export default function List() {
    const [buy, setBuy] = useState<IBuy[]>(Buy);
    const [list, setList] = useState<IBuy[]>([]);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Lista de Compras</div>
            {
                Type.map(t => (
                    <div key={t.name} className={styles.type}>{t.name}
                        {
                            buy.filter(bu => bu.type === t.name).map(b => (
                                <div className={styles.product} key={b.id}>
                                    <div><input id={b.id} type='checkbox' /></div>
                                    <label htmlFor={b.id}>
                                        {b.product.name} {b.amount} ({b.product.unit})
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )

}

