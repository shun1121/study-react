import classes from './Headline.module.css'

export function HeadLine(props) {
  return (
    <div>
      <h1 className={classes.title}>
        {props.page} page
      </h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </div>
  )
}
