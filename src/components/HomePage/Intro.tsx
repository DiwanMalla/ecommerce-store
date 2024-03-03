const Intro = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <div className="mt-10 w-40 h-40 ml-[110px]">
            <img src="myPhoto.jpg" className="rounded-full w-full h-full"></img>
          </div>
          <h2
            className="text-center mt-3"
            style={{ fontSize: "3rem", color: "#59B4B2" }}
          >
            Hello.
          </h2>
          <p className="text-center w-[400px] mt-3">
            {" "}
            I am an International Student. I am studying Bachelor of Information
            Technology in Victoria University Sydney. My major is Web and Mobile
            Application Development.
          </p>
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: 7 }, (_, index) => (
              <span
                key={index}
                className="bg-blue-100 w-2 h-2 rounded-full cursor-pointer"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
