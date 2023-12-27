import { FaRocket, FaUndo, FaCreditCard, FaComment } from "react-icons/fa";
const service = () => {
  return (
    <div id="outer" className="flex justify-center m-3">
      <div id="Container" className="flex gap-9">
        <div id="delivery" className="flex">
          <div className="p-3">
            <FaRocket size={30} />
          </div>
          <div>
            <p className="" style={{ fontWeight: "bold" }}>
              FREE DELIVERY
            </p>
            <p
              className="text-gray-500"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              For all orders over $100
            </p>
          </div>
        </div>

        {/* Return*/}
        <div id="return" className="flex">
          <div className="p-3">
            <FaUndo size={30} />
          </div>
          <div>
            <p className="" style={{ fontWeight: "bold" }}>
              90 DAYS RETURN
            </p>
            <p
              className="text-gray-500"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              If goods have problems
            </p>
          </div>
        </div>

        {/*payment */}
        <div id="delivery" className="flex">
          <div className="p-3">
            <FaCreditCard size={30} />
          </div>
          <div>
            <p className="" style={{ fontWeight: "bold" }}>
              SECURE PAYMENT
            </p>
            <p
              className="text-gray-500"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              100% secure payment
            </p>
          </div>
        </div>
        {/* Support*/}
        <div id="delivery" className="flex">
          <div className="p-3">
            <FaComment size={30} />
          </div>
          <div>
            <p className="" style={{ fontWeight: "bold" }}>
              24/7 SUPPORT
            </p>
            <p
              className="text-gray-500"
              style={{ fontSize: "14px", fontWeight: "bold" }}
            >
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default service;
