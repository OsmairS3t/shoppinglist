import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 10.37rem);
`;

export const Title = styled.div`
    width: 100%;
    text-align: left;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
`;

export const GroupInput = styled.div`
    padding: 10px;
    margin: 4px 0px;
    display: flex;
    flex-direction: column;
`;

export const LabelInput = styled.label`
    color: black;
    font-size: 14px;
`;

export const InputForm = styled.input`
    padding: 10px;
    width: 250px;
    margin: 4px 0px;
    font-size: 14px;
`;

export const ButtonSubmit = styled.button`
    padding: 10px;
    width: 250px;
    border-radius: 4px;
    background-color: silver;
    color: black;
    font-size: 18px;
    font-weight: 600;
`;

export const Error = styled.span`
    color: red;
`;

export const ButtonIngredient = styled.button`
    padding: 10px;
    width: 50px;
    border-radius: 2px;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: 600;
`;

