import { useCallback } from "react"
import debounce from "lodash.debounce"

const OPTIONS = {
  leading: false,
  trailing: true,
}

export default function useDebounce(
  fn: Function,
  wait: number,
  deps: Array<any>
) {
  return useCallback(debounce(fn, wait, OPTIONS), deps)
}
