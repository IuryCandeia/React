import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justifi-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input `
    border: 1px solid #ddd;
    height: 1.5rem;
    padding: 0 .5rem;
    border-radius: .25rem 0 0 .25rem;
    &:focus,
    %:active{
        ouline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    border: 1px solid #white;
    color: white;
    height: 1.7rem;
    padding: 0 .5rem;
    background-color: black;
    border-radius: .25rem .25rem .25rem .25rem;

`;

export const ErroMSG = styled.span`
    color: red;
    align-items: center;
    font-size: 0.65rem;
    display: block;
    font-weight: 600;
    margin-top: 10rem;
`;