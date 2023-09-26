import React from "react"
import { useLocation, matchPath } from "react-router-dom"
import styles from "./SideNav.module.css"
import { ROUTES_BY_CATEGORY } from "../nav"

interface Props {}

const SideNav: React.FC<Props> = ({}) => {
  const location = useLocation()
  return (
    <>
      <h3 className={styles.category}>Basic</h3>
      {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
        <div key={i}>
          {title && <h3 className={styles.title}>{title}</h3>}

          <ul className={styles.list}>
            {routes.map(({ path, title }) => {
              const active = !!matchPath(path, location.pathname)

              return (
                <li
                  className={active ? styles.listItemActive : styles.listItem}
                  key={path}
                >
                  <a className={styles.link} href={path}>
                    {title}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </>
  )
}

export default SideNav
