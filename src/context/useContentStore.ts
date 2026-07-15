import { useContext } from 'react'
import { ContentStoreContext } from './content-store-context'

export function useContentStore() {
  const store = useContext(ContentStoreContext)
  if (!store) throw new Error('useContentStore must be used inside ContentStoreProvider')
  return store
}
