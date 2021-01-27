/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json'
import Head from '../src/components/Head'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  ::placeholder {
    color: ${({ theme }) => theme.colors.contrastText};
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.contrastText};
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.contrastText};
  }
`

const { theme } = db

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head title={db.title} bg={db.bg} description={db.description} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
