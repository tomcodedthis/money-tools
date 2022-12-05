import Head from "next/head";
import Script from "next/script";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import clientPromise from "../lib/mongodb";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Investments from "../components/Investments";

export async function getStaticProps(context: any) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_analytics");

    const trans = await db
      .collection("transactions")
      .find({ account_id: 443178 })
      .filter({})
      .limit(1)
      .toArray();

    return {
      props: {
        isConnected: true,
        trans: JSON.parse(JSON.stringify(trans[0].transactions)),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  trans,
  isConnected,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentPage, setCurrentPage] = useState("Investments");

  return (
    <div className="h-[100vh] text-center text-black bg-green dark">
      <Head>
        <title>MoneyMatters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script src="https://cdn.tailwindcss.com" />
      <Script
        src="https://kit.fontawesome.com/e31209f1bd.js"
        crossOrigin="anonymous"
      />

      <Header currentPage={currentPage} />

      <main className="h-[calc(100vh-130px)] flex flex-col p-6">
        <Investments trans={trans} />
      </main>

      <Footer isConnected={isConnected} />
    </div>
  );
}