import Header from "./components/Header";
import Footer from "./components/footer";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
const Contact = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (index: number) => {
    setRating(index + 1);
  };
  let content = "";
  switch (rating) {
    case 1:
      content = "You rating is 1";
      break;
    case 2:
      content = "You rating is 2";
      break;
    case 3:
      content = "You rating is 3";
      break;
    case 4:
      content = "You rating is 4";
      break;
    case 5:
      content = "You rating is 5";
      break;
    default:
      content = "Please rate us";
      break;
  }
  return (
    <div>
      <div id="header">
        <Header />
      </div>
      <div id="body" className="text-center items-center bg-gray-300">
        <h1 className="text-center mt-5 pt-5">Contact Us</h1>
        <p style={{ fontSize: "25px", fontWeight: "bold" }}>Rate Us</p>
        <div className="flex gap-3 m-3 justify-center">
          {[...Array(5)].map((_, index) => (
            <div className="">
              <FaStar
                key={index}
                className="flex"
                onClick={() => {
                  handleRating(index);
                }}
                onMouseEnter={() => {
                  setHover(index + 1);
                }}
                onMouseLeave={() => setHover(0)}
                color={index + 1 <= (hover || rating) ? "yellow" : "gray"}
                size={30}
              />
            </div>
          ))}
        </div>
        <div>{content}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
