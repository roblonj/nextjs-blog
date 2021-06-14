import utilStyles from "../../styles/utils.module.css";
import styles from "./post.module.scss";
import Link from "next/link";
import Image from "next/image";

const post = ({ id, slug, cats, summary, imgUrl, date, title }) => {
  return (
    <Link href={`/posts/${encodeURIComponent(slug)}`}>
      <a>
        <article className={styles.card}>
          <div className={styles.imgContainer}>
            <Image
              src={imgUrl}
              height={100}
              width={100}
              // layout="fill"
              // objectFit="cover"
              // objectPosition="center center"
            />
          </div>
          <div className={styles.textContainer}>
            <p className={utilStyles.postTitle}>{title}</p>
            <p className={utilStyles.summary}>{summary}</p>
          </div>
        </article>
      </a>
    </Link>
  );
};

export default post;
