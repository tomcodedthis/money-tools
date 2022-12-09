import { NextPageWithLayout } from "../_app";
import Layout from "../../components/Layout";
import Budget from "../../components/Budget/Budget";

const Page: NextPageWithLayout = () => {
  return <Budget />;
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Page;
