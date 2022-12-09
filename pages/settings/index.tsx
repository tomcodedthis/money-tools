import { NextPageWithLayout } from "../_app";
import Layout from "../../components/Layout";
import Settings from "../../components/Settings/Settings";

const Page: NextPageWithLayout = () => {
  return <Settings />;
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Page;
