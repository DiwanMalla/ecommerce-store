import NavBar from "./NavBar";

const Name = () => {
  return (
    <>
      <div id="outer">
        <div className="" style={{ background: "#9BBEC8" }}>
          <NavBar />
          <div className="flex justify-end mr-[150px]">
            <img className="w-[200px] " src="cloud.png" />
          </div>

          <div className="text-center" style={{ color: "#59B4B2" }}>
            <h1
              className=""
              style={{ fontSize: "6rem", fontFamily: "Georgia" }}
            >
              I'm Diwan.
            </h1>
            <h3 className="" style={{ fontSize: "3rem" }}>
              {" "}
              a <u>pro</u>grammer.
            </h3>
          </div>
          <div className="flex justify-start ml-[150px]">
            <img className="w-[200px] " src="cloud.png" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Name;
