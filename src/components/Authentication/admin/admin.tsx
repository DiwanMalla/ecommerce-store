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
          history.push("/admin_home");
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
      className="bg-gradient-to-b from-blue-300 to-purple-200 min-h-screen flex justify-center items-center"
      style={{ minHeight: "100vh", color: "white" }}
    >
      <div className="bg-white   w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 p-6 text-purple-900">
        <div
          className="flex justify-center items-center mt-3 text-2xl"
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
        <div className="flex justify-center items-center mt-3 ml-4 text-2xl">
          <button
            onClick={handleSubmit}
            className="bg-purple-800 text-white rounded w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3 py-2 sm:py-3 px-4 sm:px-6 md:px-8"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
