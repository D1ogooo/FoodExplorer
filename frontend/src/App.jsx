import { ThemeProvider } from 'styled-components'
import { theme } from "./style/theme"
import { BrowserRouter } from 'react-router-dom'
import { LoggedRouter } from './routes/logged.routes'
import { AuthRouter } from './routes/auth.routes'
import { GlobalStyle } from './style/GlobalStyle'
import { useauth } from './hooks/useAuth'
import { useContext } from 'react'

function App() {
 const user = useContext(useauth)

 return (
  <>
   <ThemeProvider theme={theme}>
    <BrowserRouter>
     <useauth>
      {user ? <LoggedRouter /> : <AuthRouter />}
     </useauth>
     <GlobalStyle/>
    </BrowserRouter>
   </ThemeProvider>
  </>
 )
}

export default App
