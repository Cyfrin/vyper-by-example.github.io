import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

interface Path {
  title: string
  path: string
}

interface Props {
  title: string
  description: string
  version: "0.4.0"
  html: string
  cyfrinLink?: string
  prev: Path | null
  next: Path | null
}

const Example: React.FC<Props> = ({
  title,
  version,
  description,
  cyfrinLink,
  html,
  prev,
  next,
}) => {
  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | Vyper by Example | ${version}`}
        description={description}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        {cyfrinLink ? (
          <div className={styles.cyfrinLink}>
            For the most up to date version of this content, please see{" "}
            <a href={cyfrinLink} target="__blank">
              {title} (Code Example)
            </a>{" "}
            on Cyfrin.io
          </div>
        ) : null}

        <Html html={html} />

        <div className={styles.prevNext}>
          {prev && (
            <a href={prev.path}>
              {`< `}
              {prev.title}
            </a>
          )}
          {next && (
            <a href={next.path}>
              {next.title}
              {` >`}
            </a>
          )}
        </div>

        <p>
          Try on{" "}
          <a
            href="https://smartcontract.engineer/challenges?language=vyper"
            target="__blank"
          >
            Smart Contract Engineer
          </a>
        </p>
      </div>
    </div>
  )
}

export default Example
