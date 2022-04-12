import classes from "./Header.module.css";
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a className={classes.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={classes.anchor}>About</a>
      </Link>
    </header>
  );
};
