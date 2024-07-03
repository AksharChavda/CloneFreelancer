import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
    html{
    font-size: 62.5%;
    overflow-x: hidden;
    }
    body{
    overflow-x: hidden;
}
    h1{
    color:${({ theme }) => theme.colors.heading};
        font-size: 6rem;
        font-weight: 700;
    }



`;

export default GlobalStyle;