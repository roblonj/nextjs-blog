import utilStyles from "../../styles/utils.module.css";
import styles from "./postContainer.module.scss";

import Post from "../post/post";

export default function postContainer({ postData, name }) {
  return (
    <div className={styles.container}>
      <h2 className={utilStyles.headingMd}>{name}</h2>
      <ul className={styles.list}>
        {postData.map(
          ({ _id, cats, slug, imgUrl, publishedAt, title, summary }) => (
            <Post
              key={_id}
              id={_id}
              cats={cats}
              slug={slug}
              imgUrl={imgUrl}
              date={publishedAt}
              title={title}
              summary={summary}
            />
          )
        )}
      </ul>
    </div>
  );
}
