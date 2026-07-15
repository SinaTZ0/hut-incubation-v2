import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DirectionProvider } from '@base-ui/react/direction-provider'
import './index.css'
import App from './App.tsx'
import { ContentStoreProvider } from './context/ContentStore.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DirectionProvider direction="rtl">
      <ContentStoreProvider>
        <App />
      </ContentStoreProvider>
    </DirectionProvider>
  </StrictMode>,
)
