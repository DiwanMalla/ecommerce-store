import CartSymbol from "./CartSymbol";

const Cart = () => {
  return (
    <div>
      <div className="flex">
        {/* for phone number and free shipping*/}
        <div className="flex mt-3">
          <div className="flex   w-[140px] h-[55px] justify-center items-center">
            <div>
              <h2 style={{ fontSize: "10px" }}>
                <b>+977 9855037430</b>
              </h2>
              <h4 className="text-gray-400" style={{ fontSize: "10px" }}>
                <b>CALL US FREE</b>
              </h4>
            </div>
          </div>
          <div className="h-[50px] border border-1 border-gray-400"></div>
          <div className="flex justify-center items-center  w-[140px]">
            <div>
              <h2 className="text-center" style={{ fontSize: "10px" }}>
                <b>FREE SHIPPING</b>
              </h2>
              <h4 className="text-gray-400" style={{ fontSize: "10px" }}>
                <b>ON ORDER OVER $150.0</b>
              </h4>
            </div>
          </div>
        </div>

        {/*For cart wishlist symbol*/}
        <div>
          <CartSymbol />
        </div>
      </div>
    </div>
  );
};

export default Cart;
