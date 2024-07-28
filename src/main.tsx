import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from "antd";
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ConfigProvider
          theme={themeConfig}
      >
          <App />
      </ConfigProvider>
  </React.StrictMode>,
)
