import styled from "styled-components";
export const Button = styled.button`
color: red
`;
export const Div = styled.div`
display: flex;
width: 200px;
height: 200px;
background-color: gray;
color: black;

& > p{
color: green;
}

& > p:hover{
    color: blue;
}
`
