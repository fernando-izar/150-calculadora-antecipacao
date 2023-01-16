import styled from "styled-components";

export const Container = styled.div`

    form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 20px;

        
        div {
            input {
                width: 320px;
                height: 40px;
                border-radius: 5px;
                border: 1px solid #e6e8eb;
            }

            input:hover {
                border: 1px solid blue;
            }
            
            .max-installments {
                font-size: 12px;
                color: #a0a0a0;
            }

            .errors {
                color: red;
                font-style: italic;
            }
        }  
        
        .form-button {
            height: 30px;
            width: 30%;
            border-radius: 5px;
            margin-top: 20px;
        }

        .form-button:hover {
            background-color: #e6e8eb;
            border: 1px solid #e6e8eb;
        }
    }
`