import classes from "src/components/Main/Main.module.css";
import { Links } from "src/components/Links";
import { HeadLine } from "src/components/HeadLine";

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
