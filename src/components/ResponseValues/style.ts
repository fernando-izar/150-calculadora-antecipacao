import styled from "styled-components";

export const Container = styled.div`    

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 23px;

    padding: 0 20px;
    width: 40%;
    background-color: #f7f9fa;

    .title {
        font-style: italic;
        text-decoration: underline;
        color: #417ecb;
        font-weight: bold;
    }

    .values {
        font-style: italic;
        color: #91b0d7;
        b {
            color: #417ecb;
        }
        .customInput {
            border: none;
            width: 30%;
            text-align: center;
        }
    }
`