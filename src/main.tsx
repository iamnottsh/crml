import createCache from '@emotion/cache'
import {CacheProvider} from '@emotion/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

new MutationObserver(() => document.querySelectorAll('pre.language-crml').forEach(value => {
  const {parentNode} = value
  if (!parentNode) return
  const root = document.createElement('div')
  parentNode.replaceChild(root, value)
  const container = root.attachShadow({mode: 'open'})
  const cache = createCache({container, key: 'mui'})
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <App text={value.textContent}/>
      </CacheProvider>
    </React.StrictMode>,
  )
})).observe(document, {childList: true, attributes: true, subtree: true})
