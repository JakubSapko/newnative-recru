import { Layout } from "antd";
import styled from "styled-components";

const { Header, Content } = Layout;

const StyledContent = styled(Content)`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  height: 100%;

  background: rgb(0, 1, 4);
  background: linear-gradient(
    150deg,
    rgba(0, 1, 4, 1) 29%,
    rgba(17, 44, 180, 0.9284664549413515) 99%
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
`;

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: transparent;
`;

interface LayoutProps {
  Header: React.ReactNode;
  Content: React.ReactNode;
}

const SiteLayout: React.FC<LayoutProps> = (props) => {
  return (
    <StyledLayout>
      <Header style={{ background: "white" }}>{props.Header}</Header>
      <StyledContent>{props.Content}</StyledContent>
    </StyledLayout>
  );
};

export default SiteLayout;
