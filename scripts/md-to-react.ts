import assert from "assert"
import fs from "fs"
import path from "path"
import mustache from "mustache"
import { marked } from "marked"
// @ts-ignore
import { markedHighlight } from "marked-highlight"
import hljs from "highlight.js"
import { exists, removeExt, getExt, renderTemplateToFile, parseYaml } from "./lib"

const { readFile, readdir } = fs.promises

marked.use(
  markedHighlight({
    highlight: (code, language) => {
      if (language == "vyper") {
        return hljs.highlight(code, { language: "python" }).value
      }
      return code
    },
  }),
)

async function findVyperFiles(dir: string): Promise<string[]> {
  const files = await readdir(dir)
  return files.filter((file) => file.split(".").pop() == "vy")
}

async function mdToHtml(filePath: string) {
  const folders = filePath.split("/")
  const tail = folders.pop()

  const ext = getExt(tail)
  assert(ext === "md", `Expected md file, got ${tail}`)

  const fileName = removeExt(tail)
  const dir = folders.join("/")

  // get vyper code
  const vyperFileNames = await findVyperFiles(dir)

  const codes: { [key: string]: string } = {}
  for (const vyFileName of vyperFileNames) {
    const source = (await readFile(path.join(dir, vyFileName))).toString()
    codes[removeExt(vyFileName)] = source
  }

  // render vyper inside markdown
  const { content, metadata } = await parseYaml(filePath)

  const markdown = mustache.render(content, codes)

  const html = marked
    .parse(markdown)
    .replace(/&quot;/g, `"`)
    // replace \ with \\
    .replace(/\\/g, `\\\\`)

  // render markdown to html
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.html.ts.mustache"),
    path.join(dir, `${fileName}.html.ts`),
    {
      html,
      title: metadata.title,
      version: metadata.version,
      description: metadata.description,
      keywords: metadata.keywords,
    },
  )
}

function getImportPathToExample(dir: string): string {
  const folders = dir.split("/")

  const start = folders.findIndex((folder) => folder === "src")
  if (start === -1) {
    throw new Error(`Cannot find src`)
  }

  const depth = folders.length - (start + 1)

  return path.join("../".repeat(depth), "components/Example")
}

function removeTrailingSlash(dir: string): string {
  if (dir[dir.length - 1] === "/") {
    return dir.slice(0, -1)
  }
  return dir
}

async function main() {
  const args = process.argv.slice(2)
  const dir = removeTrailingSlash(args[0])

  const mdPath = path.join(dir, "index.md")

  if (!(await exists(mdPath))) {
    console.log(`Skip ${mdPath} does not exist`)
    return
  }

  await mdToHtml(mdPath)

  // create index.tsx
  await renderTemplateToFile(
    path.join(__dirname, "./template/index.tsx.mustache"),
    path.join(dir, `index.tsx`),
    {
      importPathToExample: getImportPathToExample(dir),
    },
  )
}

main()
