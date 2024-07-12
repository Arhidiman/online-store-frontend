import React from 'react'
import ReactDOM from 'react-dom/client'
import {ConfigProvider} from "antd";
import App from './App.tsx'
import './index.css'



const themeConfig = {
    token: {
        colorPrimary: '#1DA57A',
        colorLink: '#1890ff',
        borderRadiusBase: '8px',
        fontSizeBase: '16px',
        fontFamily: 'Arial, sans-serif',
    },
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
