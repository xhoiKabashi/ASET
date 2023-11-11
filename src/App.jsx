import './index.css'
import Layout from './page/layout/Layout'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* here we can enter the other pages / same example as above */}
        </Route>
      </Routes>
    </>
  )
}
