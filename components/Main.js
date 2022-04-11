import styles from "../styles/Home.module.css";
import { Links } from "./Links";
import { HeadLine } from "./HeadLine";

export function Main(props) {
  return (
    <main className={styles.main}>
      <HeadLine page={props.title}>
        <code className={styles.code}>pages/{props.title}.js</code>
      </HeadLine>
      <Links />
    </main>
  );
}
