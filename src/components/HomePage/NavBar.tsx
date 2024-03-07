import { useHistory } from "react-router-dom";

const navbar = [
  {
    title: "Home",
    url: "/main",
  },
  { title: "E-Commerce", url: "/home" },
  { title: "Far-away", url: "https://far-away-project.vercel.app/" },
  { title: "To-Do", url: "https://todo-react-two-lilac.vercel.app//" },
  { title: "IOS-Calc", url: "https://ios-calculator-one.vercel.app/" },
];
const NavBar = () => {
  const history = useHistory();
  return (
    <div>
      <div id="outer" className="text-white flex justify-between">
        <div id="logo" className="ml-[110px] ">
          <h2 style={{ fontSize: "45px", fontFamily: "-moz-initial" }}>
            Diwan
          </h2>
        </div>
        <div id="navBar" className="flex gap-6 mt-5 mr-[150px] cursor-pointer">
          {navbar.map((nav) => (
            <div
              onClick={() =>
                /^https?:\/\//.test(nav.url)
                  ? (window.location.href = nav.url)
                  : history.push(nav.url)
              }
            >
              {nav.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
