import ReactDOM from 'react-dom/client'
import App from './App'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AnecContextProvider } from './components/AnecContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AnecContextProvider>
      <App />
    </AnecContextProvider>
  </QueryClientProvider>
)