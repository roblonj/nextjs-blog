import utilStyles from "../../styles/utils.module.css";
import styles from "./shorts.module.scss";
import Link from "next/link";

const Shorts = ({ postData }) => {
  return (
    <div className={styles.container}>
      <h2 className={utilStyles.headingMd}>Short Reads</h2>
      <ol>
        {postData.map(({ _id, slug, title }) => (
          <li key={_id}>
            <Link href={`/posts/${encodeURIComponent(slug)}`}>
              <a className={styles.title}>{title}</a>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Shorts;
