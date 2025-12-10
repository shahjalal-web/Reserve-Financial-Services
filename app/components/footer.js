import styles from '../styles/footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/Logo.svg"
              alt="Reserve Financial Services Logo"
              width={160}
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>
          <div className={styles.socials}>
            <p>Follow Us</p>
            <div className={styles.icons}>
              <FaLinkedinIn />
              <FaInstagram />
              <FaFacebookF />
              <FaYoutube />
            </div>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>What we do</li>
              <li>How We Work</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Legal & Compliance</h4>
            <ul>
              <li>Disclaimer</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms Of Use</li>
            </ul>
          </div>
          <div>
            <h4>Get in Touch</h4>
            <ul className={styles.contact}>
              <li>
                <MdLocationOn /> DBA - Suite 01.03–1st Floor Commerce House, 1 Exchange Square,<br />
                Middlesbrough, England, TS1 1DE
              </li>
              <li>
                <FaEnvelope /> info@reservefinancial.co.uk
              </li>
              <li>
                <FaPhone /> 07919767108
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <hr />
        <p>
          <span>&copy; 2025 Reserve Financial Services. All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
