import { Menu } from "antd";
import { Link } from "react-router-dom";

const NavMenu: React.FC = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item>
        <Link to="/">Landing page</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/overview">My overview on AI in general </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login"> App </Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavMenu;
