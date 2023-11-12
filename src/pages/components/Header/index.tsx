import React, { useState } from 'react';
import Link from 'next/link';

import {
    Container,
    ContentHeader,
    ContainerMenu,
    BtnMobile,
    Hamburguer,
    Menu
} from './styles';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    function ToggleMenu() {
        setIsOpen(!isOpen)
    }

    return (
        <Container>
            <ContentHeader>
                <span>Empresa</span>
                <span>Lista</span>
            </ContentHeader>
            <ContainerMenu>
                <BtnMobile onClick={ToggleMenu}>
                    <Hamburguer></Hamburguer>
                </BtnMobile>
                <Menu isOpen={isOpen}>
                    <li><Link onClick={ToggleMenu} href='/' passHref>Home</Link></li>
                    <li><Link onClick={ToggleMenu} href='/List' passHref>Listar</Link></li>
                    <li><Link onClick={ToggleMenu} href="/Register" passHref>Cadastrar</Link></li>
                    <li><Link onClick={ToggleMenu} href="/Print" passHref>Imprimir</Link></li>
                    <li><Link onClick={ToggleMenu} href="/Buy" passHref>Comprar</Link></li>
                </Menu>
            </ContainerMenu>
        </Container>
    )
}
