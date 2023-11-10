import type { AppProps } from 'next/app'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme/theme'
import GlobalStyle from '@/styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}
