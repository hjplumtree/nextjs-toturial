import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";

function article({ article }) {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />

      <Link href="/">Go Back</Link>
    </>
  );
}

export const getStaticProps = async (context) => {
  const response = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await response.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${server}/api/articles`);

  const articles = await response.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context) => {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
//   );

//   const article = await response.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await response.json();

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
