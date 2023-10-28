import {Container} from '@mui/material'
import CRML from './CRML.tsx'

export default function Page({text}: {text: string | null}) {
  return (
    <Container maxWidth="sm" sx={{my: '1rem', borderRadius: '5px', backgroundColor: 'background.paper'}}>
      <CRML text={text}/>
    </Container>
  )
}
