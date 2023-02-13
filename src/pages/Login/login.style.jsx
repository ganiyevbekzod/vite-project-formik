import styled from "styled-components";

export const LoginWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    height:100vh;
    flex-direction: column;
    background-color: blue;
    color: white;
    `;
export const LoginTitle = styled.h2`
font-size: 36px;
    margin: 0 0 20px 0;
    text-align: center;

`
export const LoginForm = styled.form`
background-color: #fff;
padding: 32px;
border-radius: 6px;
width: 400px;
    
`
export const LoginLabel = styled.label`
    color: black;
`
export const LoginInput = styled.input`
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid blue;
`
export const LoginBlock = styled.div`
    margin-bottom: 20px;
`
export const LoginButton = styled.button`
    background-color: blue;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 10px;
    &:hover{
        background-color: darkblue;}
        `
        export const LoginError=styled.span`
            color:red
        `