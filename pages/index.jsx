import Head from "next/head";
import { Products } from "../components/Products";

const Home = () => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        name="description"
        content="This is simple-store with Next.js and MobX"
      />
      <meta name="keywords" content="React, Next.js, MobX, products" />
      <title>NextMobX-products</title>
    </Head>
    <Products />
  </>
);

export default Home;
