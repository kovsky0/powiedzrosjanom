import styles from "./post-body.module.css";

export default function PostBody({ children }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.content}>{children}</div>
    </div>
  );
}
