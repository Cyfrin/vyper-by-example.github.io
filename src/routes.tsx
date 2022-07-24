import component_hello_world from "./pages/hello-world"
import component_ from "./pages"

interface Path {
  title: string
  path: string
}

interface Paths {
  prev: Path | null
  next: Path | null
}

interface Route {
  path: string
  component: React.FC<Paths>
  breakingChanges?: boolean
}

const routes: Route[] = [
  {
    path: "/hello-world",
    component: component_hello_world,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
