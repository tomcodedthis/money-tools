import { NextPageWithLayout } from "../_app";
import Layout from "../../components/Layout";
import Account from "../../components/Account/Account";

const Page: NextPageWithLayout = () => {
  return <Account />;
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Page;
