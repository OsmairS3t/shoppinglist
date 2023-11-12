import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 9.62rem);
    padding: 0.5rem;
    background-color: var(--bg-blockContent);
`;

export const Title = styled.div`
    width: 100%;
    text-align: left;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
`;

export const TypeName = styled.div`
    padding: 0.2rem;
    font-weight: 600;
`;

export const Product = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
    font-weight: normal;
`;
