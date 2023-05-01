import { Tree, insert, search as _search } from "./prefix-tree"

// TODO: import, lowercased keywords
const KEYWORDS: string[] = ["hello", "function"]

// Search index - keyword => pages
const INDEX: { [key: string]: string[] } = {
  hello: ["/hello-world"],
  function: ["/function", "/default-function"],
}

const tree: Tree = {}
for (const keyword of KEYWORDS) {
  insert(tree, keyword)
}

export function unique(words: string[]): string[] {
  return Array.from(new Set(words))
}

export function search(word: string): string[] {
  const pages: string[] = []

  const keywords = _search(tree, word.toLowerCase())
  for (const keyword of keywords) {
    if (INDEX[keyword]) {
      pages.push(...INDEX[keyword])
    }
  }

  return pages
}
