import { Link } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Blog", path: "/blog" },
    { name: "Pages", path: "/pages" },
    { name: "Contact", path: "/Contact" },
  ];
  return (
    <div>
      <div>
        <ul className="flex">
          {navItems.map((item, index) => (
            <li className="m-2" key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
