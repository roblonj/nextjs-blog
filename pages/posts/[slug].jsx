import Layout from "../../components/layout/layout";
import Head from "next/head";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date/date";
import utilStyles from "../../styles/utils.module.css";
import client from "../../lib/sanityClient";
import BlockContent from "@sanity/block-content-to-react";

//Default component of the page
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.publishedAt} />
        </div>
        <div>
          <BlockContent
            blocks={postData.body}
            projectId="6flrvmot"
            dataset="production"
          />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  );
}

//Return all the dynamic routes
export async function getStaticPaths() {
  // const paths = getAllPostIds();
  const query = `*[_type == "post"]|order(publishedAt desc){"slug":slug.current,}`;
  const allSlugs = await client.fetch(query);
  const paths = allSlugs.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const postData = await getPostData(params.id);
  console.log(params.slug);
  const query = `*[_type == "post" && slug.current=="${params.slug}"]{title, publishedAt, body}`;
  const data = await client.fetch(query);
  const postData = data[0];
  console.log(postData);
  return { props: { postData } };
}
