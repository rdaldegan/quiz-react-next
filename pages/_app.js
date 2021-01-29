import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

import db from '../db.json';

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
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Quiz React/Next</title>
        <meta name="title" content="Quiz React/Next"/>
        <meta name="description" content=""/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://quiz-react-next.rdaldegan.vercel.app/"/>
        <meta property="og:title" content="Quiz React/Next"/>
        <meta property="og:description" content=""/>
        <meta property="og:image" content={db.bg}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://quiz-react-next.rdaldegan.vercel.app/"/>
        <meta property="twitter:title" content="Quiz React/Next"/>
        <meta property="twitter:description" content=""/>
        <meta property="twitter:image" content={db.bg}/>
  

      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}