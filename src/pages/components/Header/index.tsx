import React, { useState } from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function ToggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.header}>
            <div className={styles.contentHeader}>
                <span>Empresa</span>
                <span>Lista</span>
            </div>
            <div className={styles.containerMenu}>
                <button className={styles.btnMobile} onClick={ToggleMenu}>
                    <span className={styles.hamburger}></span>
                </button>
                <ul className={styles.menu}>
                    <li><Link href='/Home' passHref>Home</Link></li>
                    <li><Link href='/List' passHref>Listar</Link></li>
                    <li><Link href="/Register" passHref>Cadastrar</Link></li>
                    <li><Link href="/Print" passHref>Imprimir</Link></li>
                    <li><Link href="/Buy" passHref>Comprar</Link></li>
                </ul>
            </div>
        </div>
    )
}
