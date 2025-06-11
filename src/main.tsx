import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache , ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './ThemeProvider/ThemeProvider.tsx';
import App from './App.tsx'
import './index.css'

const baseUrl = import.meta.env.VITE_BASE_API_URL || 'http://localhost:10000'

export const apolloClient = new ApolloClient({uri: baseUrl, cache: new InMemoryCache(
    {
      typePolicies: {
          User: {
              keyFields: ["id"]
          }
      }
    }
)})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApolloProvider client={apolloClient}>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </ApolloProvider>
  </React.StrictMode>,
)
