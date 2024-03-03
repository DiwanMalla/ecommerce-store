import { useEffect, useState } from "react";

const AdminPage = () => {
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
      className="bg-gray-300 min-h-screen flex justify-center items-center"
    >
      <div
        id="outer"
        className="bg-white w-full md:w-[550px] lg:w-[650px] h-auto"
      >
        <div id="header" className="text-center text-purple-800 text-2xl">
          <h2>Login details</h2>
          <div className="flex justify-between m-2 border-b-2 pb-2">
            <div className="w-[33%] lg:w-[30%] text-center">Email</div>
            <div className="w-[33%] lg:w-[30%] text-center">Password</div>
            <div className="w-[33%] lg:w-[30%] text-center">Action</div>
          </div>
        </div>
        <div id="inner" style={{ maxHeight: "350px", overflow: "auto" }}>
          {loginData.map((login) => (
            <div
              key={login.id}
              className="flex justify-between m-2 border-b pb-2"
            >
              <div
                id="email"
                className="w-full md:w-[33%] text-center lg:w-[30%] md:text-xl"
              >
                {login.email}
              </div>
              <div
                id="password"
                className="w-full md:w-[33%] text-center lg:w-[30%] md:text-xl md:mt-0 mt-2"
              >
                {login.password}
              </div>
              <button
                className="bg-orange-400 rounded-lg border-white text-white w-[70px] md:w-[100px] lg:w-[120px] p-1 md:p-2 lg:p-3 mr-[30px]"
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

export default AdminPage;
