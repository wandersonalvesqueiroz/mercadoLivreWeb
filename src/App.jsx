import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetailPage from './pages/ProductDetailPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  )
}
