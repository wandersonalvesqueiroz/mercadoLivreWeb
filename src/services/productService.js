import api from './api'

export const getProductById = async (id, discount = null) => {
  const params = discount ? { discount } : {}
  const response = await api.get(`/products/${id}`, { params })
  return response.data
}
