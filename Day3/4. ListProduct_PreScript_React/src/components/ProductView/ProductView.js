import { React, useEffect, useState } from 'react';
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import './ProductView.css'

function ProductView({ products }) {

  // TODO: Replace with state variable
  const [sideOpen, setSideOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(()=> {
     console.log('______Effect____selectedProduct:', selectedProduct,'TRIGGER sideOpen chanage to', sideOpen );
    if (selectedProduct) setSideOpen(true);
  }, [selectedProduct]);

  useEffect(()=> {
    console.log('______Effect____sideOpen:', sideOpen, 'TRIGGER Selected Product chanage to NOTHING' );
    if(!sideOpen) setSelectedProduct();
    localStorage.setItem('LIST_PRODUCT_PROJECT_SIDEOPEN', sideOpen);
  }, [sideOpen]);


  return (
    <div className="product-view">
      <div className="product-main-area">
        <h1>Products</h1>
        <div className="product-list">
          {products.map(item =>
            <ProductListItem
              key={item.id}
              product={item}
              isSelected={selectedProduct === item ? true: false}
              onClick={() => { setSelectedProduct(item); console.log('1___LIST___. SELECT PRODUCT', item) }}
            />
          )}
        </div>
      </div>
      <div className="product-side-panel">
        <div className="product-side-panel-toggle-wrapper">
          <div className="product-side-panel-toggle"
               onClick={() => { setSideOpen(!sideOpen); console.log('2___<___. TOGGLE SIDE PANEL')}}>
            {sideOpen ? '>' : '<'}
         
          </div>
        </div>
        <ProductDetails product={selectedProduct} visible={sideOpen} />
      </div>
    </div>
  );
}

export default ProductView;