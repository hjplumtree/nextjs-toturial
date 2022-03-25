import Head from "next/head";
import { fetchCjOffers, fetchCjAdvertisers } from "./api/cj";

export default function Home() {
  const onclickHandler = () => {
    console.log(fetchCjAdvertisers().advertiser);
  };
  return (
    <div>
      <Head>
        <title>Nextjs Tutorial</title>
        <meta name="description" content="Learning Nextjs by pulling an api " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>fetching CJ</h1>
        <input type="button" value="COME ON CJ" onClick={onclickHandler} />
      </main>
    </div>
  );
}
