import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './style/GlobalStyle.js'
import { theme } from './style/theme.js'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle/>
  </ThemeProvider>
 </React.StrictMode>,
)
