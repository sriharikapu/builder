import { createGlobalStyle } from 'styled-components'
import createMediaQueries from 'util/media-query'

// Colors
export const color = {
  background: '#324a5e',
  primary: '#3498db',
  success: '#2ecc71',
  danger: '#e74c3c',
  warning: '#f1c40f',
  grey: '#e1e1e1'
}

export const sizes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1280
}

export const media = createMediaQueries(sizes)

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    color: rgb(1, 1, 1);
  }
  
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: inherit;
    
    & > div {
      height: 100%;
      overflow: auto;
    }
  }
  
  .exchange-button {
    display: block;
    margin: 10px auto;
    text-align: center;
  }
`
