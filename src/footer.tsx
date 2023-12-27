import { Link } from "react-router-dom";
const footer = () => {
  return (
    <div className="bg-blue-600 text-white" id="outer">
      <div
        id="Container"
        className="flex justify-between"
        style={{ fontSize: "25px" }}
      >
        <div id="logo"> d1mart</div>
        <div id="help">
          <h1>Help</h1>
          <div style={{ fontSize: "14px" }}>
            <p>Customer Services</p>
            <p>Delivery Options</p>
            <p>Returns and Refunds</p>
            <p>Store Finder</p>
            <p>Warranties</p>
            <p>Product Notices</p>
            <p>Terms & Conditions</p>
            <p> Privacy Notice</p>
            <p>PPE Declaration</p>
          </div>
        </div>
        <div id="about D1">
          <h1>About d1mart</h1>
          <div style={{ fontSize: "14px" }}>
            <p>Awards</p>
            <p>d1mart internation</p>
            <p>Team GB</p>
          </div>
        </div>
        <div id="Information">
          <h1>Information</h1>
          <div style={{ fontSize: "14px" }}>
            <p>Careers</p>
            <p>Property</p>
            <p>Corporate Information</p>
            <p>New Suppliers</p>
            <p>Photoservice</p>
            <p>Press Centre</p>
          </div>
        </div>
        <div className="bg-blue-200 w-[2px] h-[180px] mt-[30px]"></div>
        <div id="subscribe">
          <h1>Subscribe</h1>
          <div style={{ fontSize: "14px" }}>
            <p>
              Sign up for the d1mart newsletter today, get all the latest
              information on offers and new products
            </p>
            <div className="bg-white flex justify-between w-[100px]">
              <input placeholder="Email address"></input>
              <button className="bg-yellow-500 ">SignUp</button>
            </div>
            <p>
              Please{" "}
              <Link to="/home" style={{ fontWeight: "bold" }}>
                click here
              </Link>{" "}
              to unsubscribe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
