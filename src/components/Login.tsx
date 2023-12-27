import { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
// Define the structure of the login form
interface loginForm {
  email: string;
  password: string;
}
const login = () => {
  // State variables initialization using useState hooks
  const [loginData, setLoginData] = useState<loginForm>({
    email: "",
    password: "",
  });
  const [dependency, setDependency] = useState(false);
  const { email, password } = loginData;

  // Access the history object for programmatic navigation
  const history = useHistory();

  // State to manage the SignUp/SignIn toggle
  const [isSignUp, setIsSignUp] = useState(false);

  // Function to toggle SignUp state and trigger dependency update
  const signUpButton = () => {
    setIsSignUp(!isSignUp);
    if (isSignUp) {
      setIsSignUp(false);
    }
    setDependency(!dependency);
  };

  // Function to handle form submissio
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (isSignUp) {
      // Logic for SignUp functionality
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
      // Logic for SignIn functionality
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
          // If user exists, show success alert and redirect to Home
          alert("Success");

          history.push("/home");
        } else {
          // If user does not exist, show invalid alert
          alert("Invalid");
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  // Function to handle input changes in the form fields
  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Fetch data on component mount or when dependency changes
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

  // Return JSX for rendering the login form
  return (
    <>
      <div className="flex justify-center mt-20 flex-wrap">
        <div className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] bg-gray-100 text-center p-8">
          <h2 className="text-xl font-bold mb-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              className="bg-gray-300 mb-4 px-4 py-2 rounded"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Enter password"
              className="bg-gray-300 mb-4 px-4 py-2 rounded"
              value={password}
              onChange={handleInputChange}
            />
            {!isSignUp && (
              <Link to="/forgot-password" className="text-sm mb-4 block">
                Forgot your password?
              </Link>
            )}
            <button className="bg-red-600 text-white py-2 rounded">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
        </div>
        <div className="w-full md:w-[300px] lg:w-[400px] xl:w-[500px] bg-red-600 text-white p-8">
          <h2 className="text-xl font-bold mb-4">Hello, Friend!</h2>
          {!isSignUp ? (
            <>
              <h3 className="mb-4">
                Enter your personal details and start the journey with us.
              </h3>
              <button
                className="bg-white text-red-600 py-2 rounded border border-white"
                onClick={signUpButton}
              >
                Sign Up
              </button>
            </>
          ) : (
            <h3 className="mb-4">Let's begin our journey together.</h3>
          )}
        </div>
        <div className="w-full bg-gradient-to-r from-gray-50 to-red-600 text-center">
          <Link to="/admin">
            <button className="bg-red-600 text-white p-3 rounded border border-white m-2">
              Admin Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default login;
