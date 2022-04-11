import classes from "./Main.module.css";
import { Links } from "./Links";
import { HeadLine } from "./HeadLine";

export function Main(props) {
  return (
    <main className={classes.main}>
      <HeadLine page={props.title}>
        <code className={classes.code}>pages/{props.title}.js</code>
      </HeadLine>
      <Links />
    </main>
  );
}
