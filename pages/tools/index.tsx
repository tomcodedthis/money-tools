import { NextPageWithLayout } from "../_app";
import Layout from "../../components/Layout";
import Tools from "../../components/Tools/Tools";

const Page: NextPageWithLayout = () => {
  return <Tools />;
};

Page.getLayout = function getLayout(page: JSX.Element) {
  return <Layout>{page}</Layout>;
};

export default Page;
