import { useEffect, useState } from "react";
import Home from "./home";
interface loginForm {
  email: string;
  password: string;
}
const login = () => {
  const [loginData, setLoginData] = useState<loginForm>({
    email: "",
    password: "",
  });
  const [dependency, setDependency] = useState(false);
  const { email, password } = loginData;

  const [isSignUp, setIsSignUp] = useState(false);

  const signUpButton = () => {
    setIsSignUp(!isSignUp);
    if (isSignUp) {
      setIsSignUp(false);
    }
    setDependency(!dependency);
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isSignUp) {
      const login = { email, password };
      setTimeout(() => {
        fetch("https://retoolapi.dev/9Ab6Jv/data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(login),
        });
        setIsSignUp(false);
      });
    } else {
      try {
        const response = await fetch("https://retoolapi.dev/9Ab6Jv/data");
        if (!response.ok) {
          throw new Error("Could not fetch the data");
        }
        const data: loginForm[] = await response.json();
        const user = data.find((user) => {
          return (
            user.email === loginData.email &&
            user.password === loginData.password
          );
        });

        if (user) {
          alert("Success");
          <Home />;
        } else {
          alert("Invalid");
        }
      } catch (error) {
        alert(error);
      }
    }
  };
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  useEffect(() => {
    fetch("https://retoolapi.dev/9Ab6Jv/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setLoginData(data);
      });
  }, [dependency]);
  return (
    <>
      <div className="flex justify-center mt-[200px] ">
        <div
          className="w-[250px] bg-gray-100 text-center p-[50px] "
          style={{ fontSize: "15px" }}
        >
          <h2 className="r">{isSignUp ? "SignUp" : "SignIn"}</h2>
          <form
            className=""
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="w-[180px] bg-gray-300 mt-3"
              value={email}
              onChange={handleInputChange}
            ></input>
            <input
              type="password"
              name="password"
              className="w-[180px] bg-gray-300 mt-3"
              required
              placeholder="Enter password"
              value={password}
              onChange={handleInputChange}
            ></input>

            {!isSignUp && (
              <a href="" style={{ fontSize: "14px" }}>
                Forget your password?
              </a>
            )}
            <button className="bg-red-600 mt-2 w-[70px] rounded-lg ml-[50px] p-1">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
        <div
          className="bg-red-600 w-[250px] text-center text-white pt-[70px]"
          style={{ fontSize: "14px" }}
        >
          <h2>
            <b>Hello, Friend!</b>
          </h2>

          {!isSignUp ? (
            <>
              <h3>Enter your personal details and start journey with us.</h3>
              <button
                className="bg-red-600 mt-2 w-[70px] rounded-lg border border-white"
                onClick={signUpButton}
              >
                Sign Up
              </button>
            </>
          ) : (
            <h3>Lets begin our journey together.</h3>
          )}
        </div>
      </div>
    </>
  );
};
export default login;
