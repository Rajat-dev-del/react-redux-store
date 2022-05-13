import { Route, Routes } from 'react-router-dom'

import Header from "./components/header/Header";
import ProductDetail from './components/product-detail/ProductDetail';
import ProductListing from './components/product-listing/ProductListing';
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<ProductListing />} />
          <Route path='/Product/:productId' element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
