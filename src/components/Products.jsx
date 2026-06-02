import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="products-professional">
      <div className="section-container">
        <div className="section-header reveal">
          <h2 className="section-title">Our <span className="logo-accent">Products 🛠️</span></h2>
          <p className="section-desc">
            Advanced systems engineered for precision 🎯, reliability 🛡️, and mission success 🚀
            across all defense domains.
          </p>
        </div>

        <div className="products-grid-professional">
          {products.map((product) => (
            <div key={product.id} className="product-card-professional glass-card reveal">
              <div className="card-image-wrapper">
                <img src={product.image} alt={product.name} />
                <div className="product-category-badge">{product.category}</div>
              </div>
              <div className="card-body-professional">
                <h3 className="product-name-professional">{product.name}</h3>
                <p className="product-desc-professional">{product.description}</p>
                <div className="card-footer-professional">
                  <Link to={`/product/${product.id}`} className="btn-text">Learn more  →</Link>
                  <div className="product-id-tag">ID: {String(product.id).padStart(3, '0')}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
