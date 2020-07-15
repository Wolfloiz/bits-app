import{createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
html, body, #root{
    height: 100%;

}
body{
    font: 18px 'Fredoka One',cursive;
    -webkit-font-smoothing: antialiased !important;
    background: #fafafa;
    color: #333;
}

ul{
    list-style: none;
}
`;