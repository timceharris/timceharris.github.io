import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './Routes/Layout';
import IndexCSS from './index.css'

const App = (

    <div className='h-full w-full bg-bag'>

      fdh
        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}/>
      </Routes>

      </BrowserRouter>

      </div>
)

ReactDOM.render(
    App,
  document.getElementById('root')
);