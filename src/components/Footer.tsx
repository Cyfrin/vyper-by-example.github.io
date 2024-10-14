import React from "react"
import { useAppContext } from "../contexts/AppContext"
import styles from "./Footer.module.css"
import youTube from "./youtube.png"
import updraftDark from "./updraft-dark.png"
import updraftLight from "./updraft-light.png"
import telegram from "./telegram.png"
import discord from "./discord.png"

function Footer() {
  const app = useAppContext()
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        <img
          src={app.state.theme == "dark" ? updraftLight : updraftDark}
          alt="updraft"
          className={styles.updraft}
        />
        <a href="https://updraft.cyfrin.io" target="__blank">
          Cyfrin Updraft
        </a>
      </div>
      <div className={styles.social}>
        <div className={styles.row}>
          <img src={discord} alt="discord" className={styles.discord} />
          <a href="https://discord.gg/bt8FK2wkcW" target="__blank">
            Discord
          </a>
        </div>
        <div className={styles.row}>
          <img src={telegram} alt="telegram" className={styles.telegram} />
          <a href="https://t.me/smartcontractprogrammer" target="__blank">
            Telegram
          </a>
        </div>
        <div className={styles.row}>
          <img src={youTube} alt="youtube" className={styles.youTube} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            YouTube
          </a>
        </div>
      </div>
      <div className={styles.row}>
        <a href="mailto:contact@vyper-by-example.org">contact@vyper-by-example.org</a>
      </div>
      <div className={styles.row}>
        <a href="https://github.com/Cyfrin/vyper-by-example.github.io" target="__blank">
          source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/Cyfrin/vyper-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          license
        </a>
      </div>
    </div>
  )
}

export default Footer
