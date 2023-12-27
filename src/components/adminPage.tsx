import { useEffect, useState } from "react";

const adminPage = () => {
  interface loginForm {
    id: number;
    email: string;
    password: string;
  }
  const [loginData, setLoginData] = useState<loginForm[]>([]);
  const [isRefresh, setIsRefresh] = useState(false);
  useEffect(() => {
    fetch("https://retoolapi.dev/9Ab6Jv/data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoginData(data);
      });
  }, [isRefresh]);

  const handleDelete = (loginId: any) => {
    fetch(`https://retoolapi.dev/9Ab6Jv/data/${loginId}`, {
      method: "DELETE",
    }).then(() => {
      setIsRefresh(!isRefresh);
    });
  };
  return (
    <div
      id="wrapper"
      className="bg-gray-300 flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <div id="outer" className="bg-white w-[550px] h-[450px]">
        <div
          id="header"
          className="text-center text-purple-800"
          style={{ fontSize: "25px" }}
        >
          <h2>Login details</h2>
          <div className="flex justify-between m-2 border-b-2 pb-2">
            <div className="w-[33%] text-center">Email</div>
            <div className="w-[33%] text-center">Password</div>
            <div className="w-[33%] text-center">Action</div>
          </div>
        </div>
        <div id="inner" style={{ maxHeight: "350px", overflow: "auto" }}>
          {loginData.map((login) => (
            <div
              key={login.id}
              className="flex justify-between m-2 border-b pb-2"
            >
              <div id="email" className="w-[33%] text-center">
                {login.email}
              </div>
              <div id="password" className="w-[33%] text-center">
                {login.password}
              </div>
              <button
                className="bg-orange-400 rounded-lg border-white text-white w-[70px] p-1 mr-[30px]"
                onClick={() => {
                  handleDelete(login.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default adminPage;
