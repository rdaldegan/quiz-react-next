import React from 'react';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

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
`;

// Como ja tem um db.theme...
// ...se vc chama uma variavel entre chaves de { theme } = db ele ja pega o db.theme
const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

        <title>Quiz React/Next</title>
        <meta name="title" content="Quiz React/Next" />
        <meta name="description" content="" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-react-next.rdaldegan.vercel.app/" />
        <meta property="og:title" content="Quiz React/Next" />
        <meta property="og:description" content="Teste suas habilidades com este quiz feito em react.js e next.js" />
        <meta property="og:image" content={db.bg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-react-next.rdaldegan.vercel.app/" />
        <meta property="twitter:title" content="Quiz React/Next" />
        <meta property="twitter:description" content="Teste suas habilidades com este quiz feito em react.js e next.js" />
        <meta property="twitter:image" content={db.bg} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital@1&display=swap" rel="stylesheet" />

      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
