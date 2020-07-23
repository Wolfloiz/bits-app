
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
$Roxo: #343750 ;
$Salmao: #ED755E;
$Amarelo: #F7d47E;
$Verde: #10A581;
$Azul: #2D80B9;
*{
margin: 0;
padding: 0;
outline:0;
box-sizing: border-box;
}
html,body, #root{
    height:100%;
}
body{
        height: 100%;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        background: #ecf1f8 ;
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }
`;


