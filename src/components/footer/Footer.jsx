import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogos}>
          <div>
            <img id={styles.fb} src="./social-logo/facebook.png" alt="facebook icon" />
          </div>
          <div>
            <img src="./social-logo/instagram.png" alt=" instagram icon" />
          </div>
          <div>
            <img src="./social-logo/twitter.png" alt="X icon" />
          </div>
          <div>
            <Link to="/radio">
              <img src="./social-logo/music.png" alt="Music icon" />
            </Link>
          </div>
        </div>
        <div className={styles.footerContact}>
          <div>
            <Link to="privacy">
              <p>Privacy</p>
            </Link>

            <Link to="termsandconditions">
              <p>General conditions</p>
            </Link>
          </div>
          <div>
            <Link to="needhelp">
              <p>Need help?</p>
            </Link>
            <p>Contact Us</p>
          </div>
          <div>
            <Link to="whoarewe">
              <p>Who are we</p>
            </Link>
            <Link to="workwithus">
              <p>Work with us</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
