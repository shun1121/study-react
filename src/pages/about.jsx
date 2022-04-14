import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function About() {
  const {count, isShow, handleClick, handleDisplay} = useCounter()
  const {text, array, handleAdd, handleChange} = useInputArray()
  useBgLightBlue()

  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />

      <h1>{ isShow ? count : null}</h1>
      <button onClick={handleClick}>ボタン</button>
      <div>
        <button onClick={handleDisplay}>{ isShow ? "非表示" : "表示" }</button>
      </div>

      <input type="text" value={text} onChange={handleChange} />
      <div>
        <button onClick={handleAdd}>追加</button>
      </div>
      <ul>
        {array.map((item) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main title="about" />
      <Footer />
    </div>
  );
}
