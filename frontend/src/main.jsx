import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle.js'
import "@radix-ui/themes/styles.css";
import { theme } from './style/theme.js'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/index.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
