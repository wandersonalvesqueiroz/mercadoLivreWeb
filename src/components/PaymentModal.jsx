import React from "react";
import "./PaymentModal.css";

export default function PaymentModal({ isOpen, onClose, paymentMethods }) {
  if (!isOpen) return null;

  const renderPaymentBlock = (method) => {
    switch (method) {
      case "MERCADO_PAGO":
        return (
          <div className="section mercado-pago">
            <h3>Saldo na sua conta Mercado Pago</h3>
            <p>
              Ao finalizar sua compra, você pagará com saldo disponível na sua
              conta. Você pode depositar dinheiro em Mercado Pago via Minhas
              chaves PIX, Pix via Open finance, TED, Cartão de débito virtual
              CAIXA, boleto e lotérica.
            </p>
          </div>
        );
      case "PIX":
        return (
          <div className="section others">
            <h3>Outros meios de pagamento</h3>
            <h4>Pix</h4>
            <p>Aprovação imediata.</p>
          </div>
        );
      case "CARTAO_CREDITO":
        return (
          <div className="payment-method-box boleto">
            <h3>Boleto bancário</h3>
            <p>
              Ao comprar, explicaremos como fazer o pagamento em qualquer
              agência bancária, caixa eletrônico, Internet Banking ou
              correspondentes bancários.
            </p>
          </div>
        );
      case "BOLETO":
        return (
          <div className="payment-method-box mercado-pago">
            <strong>Mercado Pago:</strong> Use seu saldo, cartão ou outros meios
            com segurança.
          </div>
        );
      default:
        return <div className="payment-method-box">{method}</div>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>Meios de pagamento para este produto</h2>

        <div className="section mercado-pago">
          <div className="icon-text-wrapper">
            <img
              src="/images/products/payment/mercado-pago.png"
              alt="Mercado Pago"
              className="section-icon"
            />
            <p className="descricao-pagamento">
              Pagar com o <strong>Mercado Pago</strong> é escolher qualquer um destes meios. É
              rápido, seguro e não tem custo adicional.
            </p>
          </div>
        </div>
        <hr/>
        {paymentMethods.map((method, index) => (
          <React.Fragment key={index}>
            {renderPaymentBlock(method)}
            {index !== paymentMethods.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
