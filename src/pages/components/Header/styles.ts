import styled from 'styled-components'

type MenuProps = {
    isOpen: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 6.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--bg-header);
    border-bottom: 1px solid gray;
    box-shadow: 2px 2px 10px;
`;

export const ContentHeader = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
`;

export const ContainerMenu = styled.div`
    gap: 8px;
    padding: 0rem 1.5rem;
    background-color: #aadbf5;

    @media(max-width: 768px){
        z-index: 999;
        padding: 0;
    }
`;

export const BtnMobile = styled.button`
    display: none;
    padding: 10px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media(max-width: 768px) {
        display: flex;
    }
`;

export const Hamburguer = styled.span`
    width: 20px;
    border-top: 2px solid black;

    &::after, &::before{
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        margin-top: 5px;
        background-color: currentColor;
        transition: .3s;
        position: relative;
    }
`;

export const Menu = styled.ul<MenuProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    overflow: hidden;

    li a{
        height: 40px;
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.TEXT_LINK};
    }

    li a:hover {
        cursor: pointer;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.TEXT_DEFAULT};
        background-color: white;
    }

    @media(max-width: 768px) {
        position: relative;
        top: 0;
        width: 100%;
        height: calc(100vh - 9.65rem);
        display: ${({ isOpen }) => isOpen ? 'none': 'block'};
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    li a {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;


