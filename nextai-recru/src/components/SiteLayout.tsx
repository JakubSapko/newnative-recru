import { Layout } from "antd";
import styled from "styled-components";

const { Header, Content } = Layout;

const StyledContent = styled(Content)`
  @keyframes bounce {
    from {
      background: rgb(255, 0, 0);
    }

    to {
      background: rgb(0, 255, 0);
    }
  }

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

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
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
      <Header style={{background: "white"}}>{props.Header}</Header>
      <StyledContent>{props.Content}</StyledContent>
    </StyledLayout>
  );
};

export default SiteLayout;
