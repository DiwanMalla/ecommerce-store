import { Link } from "react-router-dom";

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
        <ul className="flex flex-wrap justify-center lg:justify-start">
          {navItems.map((item, index) => (
            <li className="m-2" key={index}>
              <Link
                to={item.path}
                className="text-gray-800 hover:text-indigo-600 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
