import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 9.62rem);
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({theme }) =>theme.COLORS.WHITE};
    padding-top: 1.5rem;
`
