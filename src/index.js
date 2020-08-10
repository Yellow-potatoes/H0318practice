// 引入react核心库
import React from 'react'
// 引入react-dom
import ReactDOM from 'react-dom'
// 引入外壳组件
import App from './App'
// 引入BrowserRouter
import { BrowserRouter,HashRouter } from 'react-router-dom'

// 渲染组件
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))