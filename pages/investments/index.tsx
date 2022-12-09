import Investments from "../../components/Investments/Investments";
import Layout from "../../components/Layout";
import clientPromise from "../../lib/mongodb";
import { NextPageWithLayout } from "../_app";

export async function getStaticProps(context: any) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_analytics");

    const trans = await db
      .collection("transactions")
      .find({ account_id: 443178 })
      .filter({})
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

const Page: NextPageWithLayout = ({ trans, isConnected }: any) => {
  return <Investments trans={trans} />;
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Page;
