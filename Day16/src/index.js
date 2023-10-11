import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store.js'
// import './Asset/css/Style.css'
import './Asset/css/Colors.css'
// import './Asset/css/Layout.css'
import './Asset/css/404.css'
import './Asset/css/Addon.css'
const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
