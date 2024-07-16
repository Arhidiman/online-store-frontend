import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from "antd";
import App from './App.tsx'
import './index.css'



const themeConfig = {
    token: {
        colorPrimary: '#009bf5',
        colorLink: 'black',
        borderRadiusBase: '8px',
        fontSizeBase: '16px',
        fontFamily: 'Arial, sans-serif',
    },
    components: {
        Menu: {
            itemBg: '#535bf2',
            darkItemBg: '#4727bb',
            subMenuItemBg: 'lightgrey'
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
