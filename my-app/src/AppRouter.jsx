import { Routes, Route, Navigate } from 'react-router-dom'
import App from './App.jsx'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
