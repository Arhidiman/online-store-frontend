import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from "antd";
import { ApolloClient, InMemoryCache , ApolloProvider } from '@apollo/client';
import {COLORS} from './common/constants/themeColors.ts'
import App from './App.tsx'
import './index.css'

const themeConfig = {
    token: {
        colorPrimary: COLORS.common.light,
        colorLink: 'black',
        borderRadiusBase: '8px',
        fontSizeBase: '16px',
        fontFamily: 'Arial, sans-serif',
    },
    components: {
        Menu: {
            itemBg: COLORS.common.light,
            darkItemBg: COLORS.common.dark,
            subMenuItemBg: 'lightgrey'
        },
        Button: {
            defaultBg: '#780eff'
        }
    }
};

const baseUrl = import.meta.env.VITE_BASE_API_URL || 'http://localhost:10000'


console.log(baseUrl, 'base url')
console.log( import.meta.env, 'env')
console.log( import.meta.env.VITE_BASE_API_URL, 'env')


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
      <ConfigProvider
          theme={themeConfig}
      >
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
      </ConfigProvider>
  </React.StrictMode>,
)
