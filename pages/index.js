import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Shorts from "../components/shorts/shorts";
import PostContainer from "../components/postContainer/postContainer";
import SpotlightContainer from "../components/spotlightContainer/spotlightContainer";
import styles from "../styles/index.module.scss";
import client from "../lib/sanityClient";

export default function Home({ allPostsData }) {
  const allSpotlights = allPostsData.filter(
    (post) => post.section == "Spotlight"
  );
  const allShorts = allPostsData.filter(
    (post) => post.section == "Short Reads"
  );
  const allGeos = allPostsData.filter((post) => post.section == "Geography");
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <div className={styles.container}>
        <section className={styles.spotlight}>
          <SpotlightContainer
            postData={allSpotlights}
            name="Highlighted Articles"
          />
        </section>
        <section className={styles.shorts}>
          <Shorts postData={allShorts} />
        </section>
        <section className={styles.ca}>
          <PostContainer
            postData={allGeos}
            name="Current Affairs/News Analysis"
          />
        </section>
        <section id="hist" className={styles.hist}>
          <PostContainer postData={allGeos} name="History" />
        </section>
        <section id="geo" className={styles.geo}>
          <PostContainer postData={allGeos} name="Geography" />
        </section>
        <section id="economy" className={styles.economy}>
          <PostContainer postData={allGeos} name="Economy" />
        </section>
        <section id="polity" className={styles.polity}>
          <PostContainer postData={allGeos} name="Polity" />
        </section>
      </div>
    </Layout>
  );
}
export async function getStaticProps() {
  const query = `*[_type == "post"]|order(publishedAt desc){_id,
    publishedAt,
    title,
    summary,
    "slug":slug.current,
    "section":section->title,
    "imgUrl":mainImage.asset->url,
    "cats":categories[]->title
  }`;
  const allPostsData = await client.fetch(query);
  return { props: { allPostsData } };
}
