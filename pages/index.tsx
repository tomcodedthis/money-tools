import Investments from "../components/Investments/Investments";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = ({ trans }: any) => {
  return <Investments trans={trans} />;
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>HOME</Layout>;
};

export default Page;
