import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
const Admin = () => {
  interface loginForm {
    username: string;
    email: string;
    password: string;
  }
  const [loginData, setLoginData] = useState<loginForm>({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = loginData;
  const history = useHistory();
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmit = () => {
    if (username == "Diwan Malla") {
      if (email == "malladipin@gmail.com") {
        if (password == "hello") {
          history.push("/home");
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("Wrong Email");
      }
    } else {
      alert("Invalid Username");
    }
  };
  return (
    <div
      className="bg-gradient-to-b from-blue-300 to-purple-200 flex justify-center items-center"
      style={{ minHeight: "100vh", color: "white" }}
    >
      <div className="bg-white  w-[400px] h-[300px] text-purple-900">
        <div
          className="flex justify-center items-center mt-3"
          style={{ fontSize: "28px" }}
        >
          Admin LogIn
        </div>
        <div className="align-center justify-center flex">
          <div className="h-[6px] w-[61px] bg-purple-900 "></div>
        </div>

        <div
          id="inputContainer"
          className="flex align-center justify-center gap-3 flex-wrap ml-9 mt-5"
        >
          <div
            id="name"
            className="bg-gray-300 w-[320px] h-[40px] flex justify-center items-center gap-4"
          >
            <div>
              <FaUser />
            </div>
            <div>
              <input
                type="text"
                name="username"
                value={username}
                required
                className="bg-gray-300 w-[280px]"
                placeholder="Enter Username"
                style={{ outline: "none" }}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div
            id="email"
            className="bg-gray-300 w-[320px] h-[40px] flex justify-center items-center gap-4"
          >
            <div>
              <FaEnvelope />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={email}
                required
                className="bg-gray-300 w-[280px]"
                placeholder="Enter email address"
                style={{ outline: "none" }}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
          <div
            id="name"
            className="bg-gray-300 w-[320px] h-[40px] flex justify-center gap-4 items-center"
          >
            <div>
              <FaLock />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={password}
                required
                className="bg-gray-300 w-[280px]"
                placeholder="Enter password"
                style={{ outline: "none" }}
                onChange={handleInputChange}
              ></input>
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[60px] flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="bg-purple-800 text-white rounded w-[250px] h-[30px]"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
