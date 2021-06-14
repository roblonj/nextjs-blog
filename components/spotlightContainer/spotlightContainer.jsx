import utilStyles from "../../styles/utils.module.css";
import styles from "./spotlightContainer.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function SpotlightContainer({ postData, name }) {
  return (
    <div className={styles.container}>
      <h2 className={utilStyles.headingMd}>{name}</h2>
      <ul className={styles.list}>
        {postData.map(
          ({ _id, cats, slug, imgUrl, publishedAt, title, summary }) => (
            <Link href={`/posts/${encodeURIComponent(slug)}`}>
              <a>
                <article className={styles.card}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={imgUrl}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center center"
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <p className={utilStyles.postTitle}>{title}</p>
                    <p className={utilStyles.summary}>{summary}</p>
                  </div>
                </article>
              </a>
            </Link>
          )
        )}
      </ul>
    </div>
  );
}
