import { styled } from "styled-components";

export const List = styled.ul`
margin:0;
padding:0;
`

export const Item = styled.li`
    display:flex;
    align-items: center;

    &:not(:last-Child) {
        margin-bottom: 5px;
    }
`

export const Text = styled.p`
    /* display: block; */
    margin-right: 10px;
    font-size:20px;

`

export const DeleteBtn = styled.button`
    height:20px;
    background-color: transparent;
    font-size: 14px;
    border: 1px solid #cacaca;
    border-radius: 4px;
`
