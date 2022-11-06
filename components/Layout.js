import Head from "next/head";
import Header from "./Header";

export default function Layout(pageProps) {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta
          name="description"
          content="gsap mouse-related website by delanoor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        {pageProps.children}
      </div>
    </>
  );
}
