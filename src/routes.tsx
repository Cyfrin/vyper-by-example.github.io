import component_dynamic_arrays from "./pages/dynamic-arrays"
import component_function from "./pages/function"
import component_hello_world from "./pages/hello-world"
import component_references from "./pages/references"
import component_values from "./pages/values"
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
    path: "/dynamic-arrays",
    component: component_dynamic_arrays,
  },
  {
    path: "/function",
    component: component_function,
  },
  {
    path: "/hello-world",
    component: component_hello_world,
  },
  {
    path: "/references",
    component: component_references,
  },
  {
    path: "/values",
    component: component_values,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
