import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

new MutationObserver(() => document.querySelectorAll('pre.language-crml').forEach(value => {
  const {parentNode} = value
  if (!parentNode) return
  const root = document.createElement('div')
  parentNode.replaceChild(root, value)
  ReactDOM.createRoot(root).render(<React.StrictMode><App text={value.textContent}/></React.StrictMode>)
})).observe(document, {childList: true, attributes: true, subtree: true})
