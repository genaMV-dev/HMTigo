import Image from "next/image"
import css from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className={css.container}>
      <Image
        className={css.image}
        src="/img/hero.webp"
        alt="HERO"
        width={200}
        height={200}
      ></Image>

      <div className={css.textContent}>
        <h1 className={css.title}>
          Склади НМТ на <span className={css.span}>200 балів</span> разом з
          нами!
        </h1>
        <p className={css.paragraph}>
          Готуйся до НМТ через практику. Велика база тестів за всіма предметами,
          завдання різної складності та детальний розбір кожної відповіді.
          Тренуйся щодня, відслідковуй прогрес і впевнено йди до максимального
          балу.
        </p>
        <Link className={css.button} href="/tests">
          ДО ТЕСТІВ
        </Link>
      </div>
    </div>
  )
}
