import { createGlobalStyle } from 'styled-components'

const theme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    --bgGrey: #f2f2f2;
    --borderColor: #d1d1d1;
    --darkenAliceBlue: #d6ecff;
    --green: #5cc257;
    --mainColor: #2a3647;
    --red: #ed6a6d;
    --textGrey: #656e7a;
  }
`

export default theme
