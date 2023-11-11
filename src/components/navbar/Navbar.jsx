import { Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy'
import Icon from '@mdi/react'
import { mdiTranslate } from '@mdi/js'
import styles from './Navbar.module.css'
import DrawerMobileNavigation from './NavbarMobile'

function Navbar() {
  return (
    <div className={styles.container}>
      <DrawerMobileNavigation className={styles.DrawerMobileNavigation} />
      <img src="./bus-logo.png" alt="" className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>Home</li>
          <li>About Us</li>
          <li>My reservations</li>
          <li>Login</li>
        </ul>
        <div className={styles.none}>
          <Dropdown className={styles.langContainer}>
            <MenuButton variant="plain" color="none" size="sm">
              <Icon path={mdiTranslate} size={1} className={styles.langIcon} />
            </MenuButton>
            <Menu size="sm" className={styles.langDropDown}>
              <MenuItem>
                <div>
                  <img src="./public/flags/al.png" alt="albanian flag" />
                </div>
              </MenuItem>
              <MenuItem>
                <div>
                  <img src="./public/flags/de.png" alt="german flag" />
                </div>
              </MenuItem>
              <MenuItem>
                <div>
                  <img src="./public/flags/eng.png" alt="english flag" />
                </div>
              </MenuItem>
              <MenuItem>
                <div>
                  <img src="./public/flags/it.png" alt="italian flag" />
                </div>
              </MenuItem>
            </Menu>
          </Dropdown>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
