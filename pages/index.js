import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Shorts from "../components/shorts/shorts";
import PostContainer from "../components/postContainer/postContainer";
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

      <div className="container">
        <section className="spotlight">
          <PostContainer postData={allSpotlights} name="Highlighted Articles" />
        </section>
        <section className="shorts">
          <Shorts postData={allShorts} />
        </section>
        <section className="ca">
          <PostContainer
            postData={allGeos}
            name="Current Affairs/News Analysis"
          />
        </section>
        <section id="hist" className="hist">
          <PostContainer postData={allGeos} name="History" />
        </section>
        <section id="geo" className="geo">
          <PostContainer postData={allGeos} name="Geography" />
        </section>
        <section id="economy" className="economy">
          <PostContainer postData={allGeos} name="Economy" />
        </section>
        <section id="polity" className="polity">
          <PostContainer postData={allGeos} name="Polity" />
        </section>
      </div>

      <style jsx>{`
        .container {
          padding: 0 4rem;
          display: grid;
          grid-template-columns: 5fr 1fr;
          grid-auto-rows: minmax(5rem, auto);
          grid-template-areas:
            "spotlight shorts"
            "ca ca"
            "hist hist"
            "geo geo"
            "economy economy"
            "polity polity";
           {
            /* gap: 1rem; */
          }
        }

        @media (max-width: 40rem) {
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 1rem;
          }
          .shorts {
            display: none;
          }
        }
        .spotlight {
          grid-area: spotlight;
        }
        .ca {
          grid-area: ca;
        }
        .shorts {
          grid-area: shorts;
        }
        .geo {
          grid-area: geo;
        }
        .hist {
          grid-area: hist;
        }
        .economy {
          grid-area: economy;
        }
        .polity {
          grid-area: polity;
        }
      `}</style>
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
