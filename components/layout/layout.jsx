import Head from "next/head";
import Footer from "../footer/footer";
import styles from "./layout.module.css";
import NavBar from "../navbar/navbar";
export const siteTitle = "CSM";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Single platform for your roadmap to UPSC success"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <NavBar />
            {/* <div className={styles.banner}>
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <h1 className={utilStyles.headingLg}>
                A place to get all the resources you need for preparation
              </h1>
              <Button name="Explore Roadmap 2021" />
            </div> */}
          </>
        ) : (
          <>
            <NavBar />
            {/* s */}
          </>
        )}
      </header>

      <main>{children}</main>
      <Footer />
    </div>
  );
}
