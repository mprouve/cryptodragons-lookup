import 'react-app-polyfill/ie9'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import './index.css'
import config from './config.js'
import theme from './res/mui-theme.js'
import { GlobalStyles } from './res/global-styles'
import { store } from './redux/store.js'
import App from './components/App.js'
import reportWebVitals from './reportWebVitals'

config.debug && console.log('[REACT_ENVIRONMENT]: ', process.env.REACT_APP_NODE_ENV)
config.debug && console.log('[ENVIRONMENT]: ', process.env.NODE_ENV)
config.debug && console.log('[REDUX STORE]: ', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <App />

        <div id="portal-root" />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
