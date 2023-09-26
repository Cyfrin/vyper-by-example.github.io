import React from "react"
import { useAppContext } from "../contexts/AppContext"
import styles from "./Layout.module.css"
import SideNav from "./SideNav"
import Header from "./Header"
import Footer from "./Footer"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const { state } = useAppContext()

  return (
    <div className={styles.component}>
      <div className={styles.sideNav}>{state.sideNav ? <SideNav /> : null}</div>
      <div className={styles.main}>
        <Header />
        <div className={styles.children}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
