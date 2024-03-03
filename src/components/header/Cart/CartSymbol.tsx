import { FaShoppingBasket, FaUser, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const CartSymbol = () => {
  const [showAccountDetails, setShowAccountDetails] = useState(false);

  const handleUserMouseEnter = () => {
    setShowAccountDetails(true);
  };

  const handleUserMouseLeave = () => {
    setShowAccountDetails(false);
  };

  let total = 0;

  return (
    <div className="ml-5">
      <div className="flex justify-center items-center relative">
        <div
          className="m-3 cursor-pointer"
          onMouseEnter={handleUserMouseEnter}
          onMouseLeave={handleUserMouseLeave}
        >
          <FaUser />
          {showAccountDetails && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md p-4 rounded-lg z-10 w-[165px]">
              <div>
                <Link to={"/user"}>Your Account</Link>
              </div>
              <div>
                <Link to={"/order"}>Your Orders</Link>
              </div>
              <div>
                <Link to={"/login"}>Sign Out</Link>
              </div>
            </div>
          )}
        </div>
        <div className="m-3 cursor-pointer">
          <FaHeart />
        </div>
        <div className="m-3 cursor-pointer">
          <FaShoppingBasket id="shoppingCart" />
        </div>
        <div className="hidden md:block">
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartSymbol;
