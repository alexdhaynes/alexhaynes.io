import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from "../styles/globals.styles";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
