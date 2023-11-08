import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 7.25rem;
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
    padding: 0rem 2rem;
    background-color: var(--bg-header-light);
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
`;

export const Hamburguer = styled.ul`
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

export const Menu = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
`;

export const ItemMenu = styled.li`
    height: 40px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
`;

