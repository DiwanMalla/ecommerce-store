import Cart from "./Cart";
import Search from "./Search";
import NavBar from "./navBar";

const Header = () => {
  return (
    <div className="flex">
      <div className="w-[200px] h-[112px] border border-solid flex items-center justify-center">
        <div className="">
          <b>d1mart</b>
        </div>
      </div>
      <div>
        <div className="ml-3">
          <div className="flex">
            <Search />
            <Cart />
          </div>
          <NavBar />
        </div>
        <hr className="mt-1 w-[730px]" />
      </div>
    </div>
  );
};

export default Header;
