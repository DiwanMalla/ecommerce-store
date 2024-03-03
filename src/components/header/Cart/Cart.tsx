import CartSymbol from "./CartSymbol";

const Cart = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Phone number */}
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="w-full md:w-auto md:max-w-xs flex justify-center items-center md:border-r md:border-gray-400 md:pr-4">
            <div className="text-center md:text-left">
              <h2 className="text-xs md:text-base font-bold">
                +977 9855037430
              </h2>
              <h4 className="text-xs md:text-base text-gray-400">
                CALL US FREE
              </h4>
            </div>
          </div>

          {/* Free shipping */}
          <div className="w-full md:w-auto md:max-w-xs mt-2 md:mt-0 md:pl-4 flex justify-center items-center">
            <div className="text-center md:text-left">
              <h2 className="text-xs md:text-base font-bold">FREE SHIPPING</h2>
              <h4 className="text-xs md:text-base text-gray-400">
                ON ORDERS OVER $150.0
              </h4>
            </div>
          </div>
        </div>

        {/* Cart/Wishlist symbol */}
        <div className="mt-3 md:mt-0">
          <CartSymbol />
        </div>
      </div>
    </div>
  );
};

export default Cart;
