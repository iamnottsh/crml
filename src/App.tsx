import {createTheme, darken, lighten, ScopedCssBaseline, ThemeProvider, useMediaQuery} from '@mui/material'
import {blueGrey, pink, purple} from '@mui/material/colors'
import {zhCN} from '@mui/material/locale'
import {useMemo} from 'react'
import Page from './Page.tsx'

export default function App({text}: {text: string | null}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = useMemo(() => createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
      ...prefersDarkMode ? {
        primary: {main: purple.A100},
        secondary: {main: pink.A200},
        background: {default: darken(blueGrey[900], 0.5)},
      } : {
        primary: {main: purple[500]},
        secondary: {main: pink[300]},
        background: {default: lighten(blueGrey.A100, 0.5)},
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
        <Page text={text}/>
      </ScopedCssBaseline>
    </ThemeProvider>
  )
}
