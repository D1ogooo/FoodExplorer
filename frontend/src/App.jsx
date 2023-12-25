import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { GlobalStyle } from './style/GlobalStyle'
import { theme } from "./style/theme"

function App() {
 return (
  <>
   <ThemeProvider theme={theme}>
    <BrowserRouter>
     <Router/>
     <GlobalStyle/>
    </BrowserRouter>
   </ThemeProvider>
  </>
 )
}

export default App
