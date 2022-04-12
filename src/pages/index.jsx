import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback } from 'react';
import { useEffect } from "react";

export default function Home() {
  // const handleClick = useCallback((e) => {
  //   console.log(e.target.href)
  //   e.preventDefault();
  //   alert(1)
  // }, [])

  useEffect(() => {
    console.log("mount");
    document.body.style.backgroundColor = "lightblue"
    return () => {
      console.log("unmount");
      document.body.style.backgroundColor = ""
    }
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {/* <a
        href="/about"
        onClick={handleClick}
      >
        About
      </a> */}
      {/* <button
        onClick={(e) => {
          // e.preventDefault()
          alert("hi");
        }}
      >
        Button
      </button> */}
      <Main title="index" />
      <Footer />
    </div>
  );
}
