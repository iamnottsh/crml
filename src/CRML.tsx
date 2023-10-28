import {alpha, List, ListItem, ListItemText, Paper, styled, Typography} from '@mui/material'
import {memo, useMemo} from 'react'

interface Block {
  size: number
  text: string
}

interface Message {
  me: boolean
  content: Block[]
}

function parse(text: string | null) {
  const data = [] as Message[]
  if (!text) return data
  let content = [] as Block[]
  text.split('\n').forEach(value => {
    let size = 0
    while (value[size] === ' ') ++size
    const line = value.substring(size)
    if (line.endsWith('<--')) {
      const text = line.substring(0, line.length - 3).trim()
      if (text.length) content.push({size, text})
      data.push({me: true, content})
      content = []
    } else if (line.endsWith('-->')) {
      const text = line.substring(0, line.length - 3).trim()
      if (text.length) content.push({size, text})
      data.push({me: false, content})
      content = []
    } else {
      const text = line.trim()
      if (text.length) content.push({size, text})
    }
  })
  return data
}

const PL = styled(Paper)(({theme}) => ({
  borderRadius: '0.16rem 1.6rem 1.6rem 1.6rem',
  marginRight: '3.2rem',
  backgroundColor: alpha(theme.palette.primary.main, 0.2),
}))
const PC = styled(Paper)(({theme}) => ({
  borderRadius: '1.6rem 0.16rem 1.6rem 1.6rem',
  marginLeft: '3.2rem',
  backgroundColor: alpha(theme.palette.secondary.main, 0.2),
}))

function Token({size, text}: Block) {
  return (
    <Typography component="span" fontSize={`${Math.pow(1.125, size) * 0.875}rem`}>
      {text}
    </Typography>
  )
}

function Item({me, content}: Message) {
  const P = me ? PC : PL
  return (
    <ListItem sx={{justifyContent: me ? 'right' : 'left'}}>
      <P>
        <ListItemText
          primary={content.map((value, index) => <Token {...value} key={index}/>)}
          primaryTypographyProps={{sx: {wordBreak: 'break-all', whiteSpace: 'normal'}}}
          sx={{m: '0.4rem 0.8rem'}}
        />
      </P>
    </ListItem>
  )
}

const Render = memo(({data}: {data: Message[]}) => {
  return (
    <List>
      {data.map((value, index) => <Item {...value} key={index}/>)}
    </List>
  )
})

export default function CRML({text}: {text: string | null}) {
  const data = useMemo(() => parse(text), [text])
  return <Render data={data}/>
}
