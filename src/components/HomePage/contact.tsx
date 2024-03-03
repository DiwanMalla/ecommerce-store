const Contact = () => {
  return (
    <div className="flex justify-center mt-[60px]">
      <div className=" w-[300px]">
        <div className="text-center" style={{ color: "#59B4B2" }}>
          <h2 style={{ fontSize: "32px" }}>Get In Touch</h2>
          <h3 className="mt-[40px]" style={{ fontSize: "25px" }}>
            If you love coding in group.
          </h3>
        </div>
        <div className="mt-[50px]">
          <p>
            Love coding as much as I do? Let's talk about how awesome coding is!
            and work together
          </p>
        </div>
        <div className="flex justify-center">
          <a href="mailto:malladipin@gmail.com">
            <button
              className="rounded-lg p-2 pl-4 pr-4 mt-[40px]"
              style={{
                background: "#59B4B2",
                color: "white",
                fontWeight: "bold",
              }}
            >
              CONTACT ME
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
