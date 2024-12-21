import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './style/GlobalStyle.js'
import { theme } from './style/theme.js'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/index.jsx'
import { AuthProvider } from './hooks/useAuth.jsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <ThemeProvider theme={theme}>
   <GlobalStyle/>
    <AuthProvider>
     <Router />
    </AuthProvider>
    <ToastContainer
        position="top-right"
        autoClose={4000}
        limit={4}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </ThemeProvider>
 </React.StrictMode>,
)
