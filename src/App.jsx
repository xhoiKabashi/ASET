import './index.css'
import Layout from './page/layout/Layout'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// rooter to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    // Layout as the main path to be shown in all of the pages
    <Route path="/" element={<Layout />}>
      {/* <Route path="dashboard" element={<Layout />} /> */}
      {/* ... etc. */}
    </Route>
  )
)

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
