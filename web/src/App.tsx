import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AppPage } from './pages/AppPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { Layout } from './components/Layout'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="apps/:slug" element={<AppPage />} />
        <Route path="privacy/:slug" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
