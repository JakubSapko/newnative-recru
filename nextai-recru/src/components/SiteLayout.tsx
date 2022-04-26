import { Layout } from "antd";


const { Header, Content } = Layout;

interface LayoutProps {
  Header: React.ReactNode;
  Content: React.ReactNode;
}

const SiteLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white" }}>{props.Header}</Header>
      <Content style={{ backgroundColor: "white" }}>{props.Content}</Content>
    </Layout>
  );
};

export default SiteLayout;