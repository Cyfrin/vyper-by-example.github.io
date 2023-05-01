import React, { useState } from "react"
import SEO from "../components/SEO"
import SearchBar from "../components/SearchBar"
import { search, unique } from "../lib/search"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"

interface Route {
  path: string
  title: string
}

const VY_ROUTES: Route[] = [
  {
    path: "hello-world",
    title: "Hello World",
  },
  { path: "values", title: "Data Types - Values" },
  { path: "references", title: "Data Types - References" },
  { path: "dynamic-arrays", title: "Dynamic Arrays" },
  { path: "function", title: "Function" },
  { path: "internal-external-functions", title: "Internal and External Functions" },
  { path: "view-pure-functions", title: "View and Pure Functions" },
  { path: "constructor", title: "Constructor" },
  {
    path: "private-public-state-variables",
    title: "Private and Public State Variables",
  },
  { path: "constants", title: "Constants" },
  { path: "immutable", title: "Immutable" },
  { path: "if-else", title: "If Else" },
  { path: "for-loop", title: "For Loop" },
  { path: "error", title: "Error" },
  { path: "event", title: "Event" },
  { path: "payable", title: "Payable" },
  { path: "default-function", title: "Default Function" },
  { path: "send-ether", title: "Send Ether" },
  { path: "raw-call", title: "Raw Call" },
  { path: "delegate-call", title: "Delegate Call" },
  { path: "interface", title: "Interface" },
  { path: "hash-function", title: "Hash Function" },
  { path: "verify-signature", title: "Verify Signature" },
  { path: "create-new-contract", title: "Create New Contract" },
  { path: "re-entrancy-lock", title: "Re-entrancy Lock" },
  { path: "self-destruct", title: "Self Destruct" },
  { path: "print", title: "Debug with Print" },
  { path: "unsafe-math", title: "Unsafe Math" },
]

const DEFI_ROUTES = [
  {
    path: "curve-swap",
    title: "Curve Swap",
  },
  {
    path: "curve-liquidity",
    title: "Curve Add and Remove Liquidity",
  },
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "",
    routes: VY_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "DeFi",
    routes: DEFI_ROUTES.map((route) => ({
      ...route,
      path: `/defi/${route.path}`,
    })),
  },
]

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}

const UPDATES = [
  "2023/03/04 - Unsafe math",
  "2022/12/27 - Print",
  "2022/12/27 - Vyper 0.3.7",
]

export default function HomePage() {
  const [searchResults, setSearchResults] = useState<{ [key: string]: boolean } | null>(
    null
  )

  function onChangeSearchQuery(query: string) {
    if (query.length == 0) {
      setSearchResults(null)
      return
    }

    const words = unique(query.split(" "))
    const pages: { [key: string]: boolean } = {}

    for (const word of words) {
      const res = search(word)
      for (const page of res) {
        pages[page] = true
      }
    }

    setSearchResults(pages)
  }

  function renderLinks() {
    if (searchResults) {
      if (Object.keys(searchResults).length == 0) {
        return <div>No results</div>
      }

      return (
        <ul className={styles.list}>
          {ROUTES.filter(({ path }) => searchResults[path]).map(({ path, title }) => (
            <li className={styles.listItem} key={path}>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      )
    }

    return ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
      <div key={i}>
        {title && <h3 className={styles.category}>{title}</h3>}

        <ul className={styles.list}>
          {routes.map(({ path, title }) => (
            <li className={styles.listItem} key={path}>
              <a href={path}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    ))
  }

  return (
    <div className={styles.component}>
      <SEO
        title="Vyper by Example | 0.3.7"
        description="Learn smart contract programming using Vyper"
      />
      <h1 className={styles.header}>
        <a href="/">Vyper by Example</a>
      </h1>
      <div className={styles.subHeader}>v 0.3.7</div>
      <div className={styles.main}>
        <p>
          an introduction to <a href="https://vyper.readthedocs.io">Vyper</a> with
          simple examples
        </p>

        <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            Most code are explained here
          </a>
        </div>

        <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>

        <div className={styles.search}>
          <SearchBar onChange={onChangeSearchQuery} />
        </div>

        {renderLinks()}
      </div>
    </div>
  )
}
