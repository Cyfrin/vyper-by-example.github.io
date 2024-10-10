export interface Route {
  path: string
  title: string
}

export interface Translation {
  lang: string
  url: string
}

export const TRANSLATIONS: Translation[] = [
  {
    lang: "Simplified Chinese",
    url: "https://github.com/Web3-Club/vyper-by-example_Chinese",
  },
]

export const VY_ROUTES: Route[] = [
  {
    path: "whats-new",
    title: "What's New in Vyper 0.4",
  },
  {
    path: "hello-world",
    title: "Hello World",
  },
  { path: "values", title: "Data Types - Values" },
  { path: "references", title: "Data Types - References" },
  { path: "dynamic-arrays", title: "Dynamic Arrays" },
  { path: "constants", title: "Constants" },
  { path: "constructor", title: "Constructor" },
  {
    path: "private-public-state-variables",
    title: "Private and Public State Variables",
  },
  { path: "immutable", title: "Immutable" },
  { path: "function", title: "Function" },
  { path: "internal-external-functions", title: "Internal and External Functions" },
  { path: "view-pure-functions", title: "View and Pure Functions" },
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
  { path: "imports", title: "Imports" },
  { path: "modules", title: "Modules" },
]

export const APP_ROUTES = [
  {
    path: "rebase-token",
    title: "Rebase token",
  },
  {
    path: "lerp",
    title: "Linear interpolation",
  },
]

export const DEFI_ROUTES = [
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
    title: "App",
    routes: APP_ROUTES.map((route) => ({
      ...route,
      path: `/app/${route.path}`,
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

export const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
export const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
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
