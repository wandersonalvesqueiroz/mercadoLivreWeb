import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import { getProductById } from '../services/productService'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    getProductById(id)
      .then(data => setProduct(data))
      .catch(() => setError('Produto não encontrado'))
  }, [id])

  if (error) return <p style={{ textAlign: 'center' }}>{error}</p>
  if (!product) return <p style={{ textAlign: 'center' }}>Carregando...</p>

  return <ProductDetail product={product} />
}
