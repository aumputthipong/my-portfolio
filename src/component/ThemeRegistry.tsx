// components/MUIThemeProvider.tsx
'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { ReactNode } from 'react'

const theme = createTheme({
  
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontFamily: 'Gill Sans, Calibri, "Trebuchet MS", sans-serif',
    },
    h2: {
      fontFamily: 'Gill Sans, Calibri, "Trebuchet MS", sans-serif',
    },
  },
  
})

export default function MUIThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  )
}
