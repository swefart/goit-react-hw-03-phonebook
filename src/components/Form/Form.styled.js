import styled  from "styled-components";




export const FormEl = styled.form`
width: 350px;
height: 200px;
padding: 10px 8px;
border: 1px solid black;
margin-bottom: 20px;
`


export const Label = styled.label`
    display:block;
    margin-bottom: 20px;
    font-size: 20px;

`

export const Input = styled.input`
    width:80%;
    display: block;
    border: 1px solid black;
    border-radius: 4px;


`

export const Btn = styled.button`
    display:block; 
    width: 30%;
    height: 10%;
    background-color: transparent;
    font-size:14px;
    border-radius: 4px;

    &:focus, &:hover {
        background-color: green;
    }
`