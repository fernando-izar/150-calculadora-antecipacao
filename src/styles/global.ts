import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  } 

  body,html{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:var(--color-secondary)
  }

    button {
        cursor: pointer;
    }

    p, h1, h2 , h3 {
        font-family: 'Poppins';
        
    }

    ul, ol, li {
        list-style: none;
        margin: 0px;
        padding: 0px;

    }

    a, u {
        text-decoration: none;
    }

    
    
    

    


`;
