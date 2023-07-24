import { styled } from "styled-components";


export const Input = styled.input`
    display:block;
    margin-bottom: 20px;
    border: 1px solid black;
    border-radius: 4px;

    &:focus {
        outline:none;
        border: 1px solid transparent;
    }
`