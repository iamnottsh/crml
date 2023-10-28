import {Container} from '@mui/material'
import CRML from './CRML.tsx'

export default function Page({text}: {text: string | null}) {
  return (
    <Container maxWidth="sm">
      <CRML text={text}/>
    </Container>
  )
}
