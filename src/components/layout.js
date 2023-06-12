import * as React from 'react'
import { Link } from 'gatsby'
import { footer, container, heading, navLinks, navLinkItem, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <html lang='en'>
      <body>
        <div className={container}>
          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>Home</Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>About</Link></li>
            </ul>
          </nav>
          <main>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
          </main>
        </div>
        <div className={footer}>
          <p>Author: Anita Pal</p>
          <p><a href="mailto:fujitahibaraki@gmail.com">Contact Me ฅ/ᐠ. ̫ .ᐟ\ฅ </a></p>
        </div>
      </body>
    </html>
  )
}

export default Layout