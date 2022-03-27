import { server } from "../config";

import { fetchCjOffers, fetchCjAdvertisers } from "./api/cj";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  // const onclickHandler = () => {
  //   fetchCjAdvertisers().then((data) => console.log(data));
  // };
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(`${server}/api/articles`);
  const articles = await response.json();

  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`,
//   );
//   const articles = await response.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
