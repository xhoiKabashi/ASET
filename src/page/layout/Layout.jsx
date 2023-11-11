import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import styles from './Layout.module.css'
import Footer from '../../components/footer/Footer'
function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
