import { FaShoppingBasket, FaUser, FaHeart } from "react-icons/fa";
const CartSymbol = () => {
  let total = 0;
  return (
    <div>
      <div className="ml-5">
        <div className="w-[140px] h-[65px] flex justify-center items-center">
          <div className="m-3">
            <FaUser />
          </div>
          <div className="m-3">
            <FaHeart />
          </div>
          <div className="m-3">
            <FaShoppingBasket id="shoppingCart" />
          </div>
          <div>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSymbol;
