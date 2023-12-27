import Cart from "./Cart";
import Search from "./Search";
import NavBar from "./navBar";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex ">
        <div className="w-[200px] h-[112px] border border-solid flex items-center justify-center">
          <div className="">
            <b>d1mart</b>
          </div>
        </div>
        <div>
          <div className="ml-3">
            <div className="flex">
              <Search />
              <div className="m-3">
                <Cart />
              </div>
            </div>
            <NavBar />
          </div>
          <hr className="w-[930px]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
