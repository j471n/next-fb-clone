import { getSession } from "next-auth/client";
import Head from "next/head";
import Header from "./../components/Header";
import Login from "./../components/Login";
import Feed from "./../components/Feed";
import Sidebar from "./../components/Sidebar";
import Widget from "./../components/Widget";
import { db } from "./../services/firebase";



export default function Home({ session, posts }) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone- </title>
      </Head>

      <Header />

      <main className="flex ">
        <Sidebar />
              <Feed posts={ posts}/>
        <Widget />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
