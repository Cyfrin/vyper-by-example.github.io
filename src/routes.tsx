import component_constants from "./pages/constants"
import component_constructor from "./pages/constructor"
import component_create_new_contract from "./pages/create-new-contract"
import component_default_function from "./pages/default-function"
import component_delegate_call from "./pages/delegate-call"
import component_dynamic_arrays from "./pages/dynamic-arrays"
import component_error from "./pages/error"
import component_event from "./pages/event"
import component_for_loop from "./pages/for-loop"
import component_function from "./pages/function"
import component_hash_function from "./pages/hash-function"
import component_hello_world from "./pages/hello-world"
import component_if_else from "./pages/if-else"
import component_immutable from "./pages/immutable"
import component_interface from "./pages/interface"
import component_internal_external_functions from "./pages/internal-external-functions"
import component_payable from "./pages/payable"
import component_private_public_state_variables from "./pages/private-public-state-variables"
import component_raw_call from "./pages/raw-call"
import component_re_entrancy_lock from "./pages/re-entrancy-lock"
import component_references from "./pages/references"
import component_self_destruct from "./pages/self-destruct"
import component_send_ether from "./pages/send-ether"
import component_values from "./pages/values"
import component_verify_signature from "./pages/verify-signature"
import component_view_pure_functions from "./pages/view-pure-functions"
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
    path: "/constants",
    component: component_constants,
  },
  {
    path: "/constructor",
    component: component_constructor,
  },
  {
    path: "/create-new-contract",
    component: component_create_new_contract,
  },
  {
    path: "/default-function",
    component: component_default_function,
  },
  {
    path: "/delegate-call",
    component: component_delegate_call,
  },
  {
    path: "/dynamic-arrays",
    component: component_dynamic_arrays,
  },
  {
    path: "/error",
    component: component_error,
  },
  {
    path: "/event",
    component: component_event,
  },
  {
    path: "/for-loop",
    component: component_for_loop,
  },
  {
    path: "/function",
    component: component_function,
  },
  {
    path: "/hash-function",
    component: component_hash_function,
  },
  {
    path: "/hello-world",
    component: component_hello_world,
  },
  {
    path: "/if-else",
    component: component_if_else,
  },
  {
    path: "/immutable",
    component: component_immutable,
  },
  {
    path: "/interface",
    component: component_interface,
  },
  {
    path: "/internal-external-functions",
    component: component_internal_external_functions,
  },
  {
    path: "/payable",
    component: component_payable,
  },
  {
    path: "/private-public-state-variables",
    component: component_private_public_state_variables,
  },
  {
    path: "/raw-call",
    component: component_raw_call,
  },
  {
    path: "/re-entrancy-lock",
    component: component_re_entrancy_lock,
  },
  {
    path: "/references",
    component: component_references,
  },
  {
    path: "/self-destruct",
    component: component_self_destruct,
  },
  {
    path: "/send-ether",
    component: component_send_ether,
  },
  {
    path: "/values",
    component: component_values,
  },
  {
    path: "/verify-signature",
    component: component_verify_signature,
  },
  {
    path: "/view-pure-functions",
    component: component_view_pure_functions,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
