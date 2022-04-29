import { Menu } from "antd";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">My overview on task and AI in general</Link>
      </Menu.Item>

      <Menu.Item>
        <Link to="/app"> App </Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
