import React, { useState } from "react";
import "./ProductDetail.css";
import StarRating from "./StarRating";
import { formatBRL, getRangeLabel } from "../utils/utils";
import RatingBars from "./RatingBars";
import PaymentModal from "./PaymentModal";

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product)
    return <p style={{ textAlign: "center" }}>Produto não encontrado</p>;

  return (
    <div className="product-container">
      <div className="image-gallery">
        <div className="thumbnail-list">
          {product.images.map((img, index) => (
            <div
              key={index}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} alt={`Miniatura ${index}`} className="thumb-img" />
            </div>
          ))}
        </div>
        <div className="main-image-box">
          <img src={selectedImage} alt={product.title} className="main-image" />
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>

        <StarRating
          rating={product.rating}
          totalRatings={product.totalRatings}
        />

        <div className="product-pricing">
          {product.lastPrice > product.price && (
            <span className="last-price">{formatBRL(product.lastPrice)}</span>
          )}
          <span className="current-price">{formatBRL(product.price)}</span>
        </div>

        {product.discountedPrice && (
          <p className="product-discount">
            Com desconto: {formatBRL(product.discountedPrice)}
          </p>
        )}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowModal(true);
          }}
          className="open-payment-link"
        >
          Ver meios de pagamento
        </a>

        <PaymentModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          paymentMethods={product.paymentMethods}
        />

        <div className="product-details-box">
          <h4>O que você precisa saber sobre este produto</h4>
          <ul>
            {product.details.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-column">
        <div className="purchase-box">
          <div className="quantity-selector">
            <span>Quantidade:</span>
            <div className="selector-controls">
              <button onClick={decreaseQuantity} disabled={quantity <= 1}>
                −
              </button>
              <input type="number" value={quantity} readOnly />
              <button
                onClick={increaseQuantity}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
            <small style={{ color: "#888" }}>Disponível: {product.stock}</small>
          </div>

          <div className="purchase-actions">
            <button className="buy-button">Comprar agora</button>
            <button className="secondary-button">Adicionar ao carrinho</button>
          </div>
        </div>

        <div className="seller-box">
          <h4>Vendido por</h4>
          <h3>{product.seller.tradeName}</h3>

          <small>
            <strong>{getRangeLabel(product.seller.products)}</strong> Vendidos
          </small>
          <RatingBars value={Math.round(product.seller.rating)} />
          <p>
            <strong>{getRangeLabel(product.seller.sales)}</strong> Vendas
            concluídas
          </p>
          <div>
            <button className="secondary-button">
              Ver mais produtos do vendedor
            </button>
          </div>
        </div>
      </div>

      <div className="descricao-final">
        <h3>Descrição do produto</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
