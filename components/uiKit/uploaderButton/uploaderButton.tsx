import classes from "./uploaderButton.module.scss";

export default function UploaderButton({ children }) {
  return (
    <button type="button" className={classes.upLoadButton}>
      {children}
    </button>
  );
}
