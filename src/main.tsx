import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from "antd";
import { ApolloClient, InMemoryCache , ApolloProvider } from '@apollo/client';
import { COLORS } from './common/constants/themeColors.ts'
import App from './App.tsx'
import type { Theme } from 'antd/es/config-provider/context';
import type { GlobalToken } from 'antd';
import type { TokenWithCommonCls } from 'antd/es/theme/internal';
import './index.css'




const themeConfig = {
    token: {
        colorPrimary: COLORS.common.light,
        fontFamily: 'Arial, sans-serif',
        colorDarkTheme: 'white',
        colorLightTheme: 'black',
        backgroundColorDark: '#333',
        backgroundColorLight: '#ececec'
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
