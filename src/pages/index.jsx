import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useEffect, useState } from "react";
import { useCallback } from "react";

export default function Home() {
  const [count, setCount] = useState(1)
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true)

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount(prevCount => prevCount + 1)
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  const handleChange = useCallback((e) => {
    console.log(e.target.value);
    setText(e.target.value.trim())
  }, [])

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>
        <button onClick={handleDisplay}>{ isShow ? "非表示" : "表示" }</button>
      </div>
      <input type="text" value={text} onChange={handleChange} />
      <h1>{ isShow ? count : null}</h1>
      <button onClick={handleClick}>Button</button>
      <Main title="index" />
      <Footer />
    </div>
  );
}
