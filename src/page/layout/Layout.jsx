import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import styles from './Layout.module.css'
function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
