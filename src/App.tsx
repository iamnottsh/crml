import {createTheme, darken, lighten, ScopedCssBaseline, ThemeProvider, useMediaQuery} from '@mui/material'
import {grey, pink, purple} from '@mui/material/colors'
import {zhCN} from '@mui/material/locale'
import {useMemo} from 'react'
import Page from './Page.tsx'

export default function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      ...prefersDarkMode ? {
        primary: {main: purple.A100},
        secondary: {main: pink.A200},
        background: {default: darken(grey[600], 0.875)},
      } : {
        primary: {main: purple[500]},
        secondary: {main: pink[300]},
        background: {default: lighten(grey.A400, 0.875)},
      },
    },
    typography: {
      fontSize: 15.75,
    },
    spacing: 9,
  }, zhCN), [prefersDarkMode])
  
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <Page/>
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}
