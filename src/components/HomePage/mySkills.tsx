const myskills = [
  {
    title: "Design and Development",
    description:
      "I started learning to code when I was 14 years old becuase I found it interesting. Overtime, I have gained some skills of web designing and web development.",
    image: "typing.webp",
  },
];
const Skills = () => {
  return (
    <div className="flex justify-center mt-10">
      <div>
        <div>
          <h2
            className="text-center"
            style={{ fontSize: "3rem", color: "#59B4B2" }}
          >
            My Skills
          </h2>
        </div>

        <div className="w-[500px] mt-7">
          <div>
            {myskills.map((skills) => (
              <div className="flex gap-3">
                <div className="w-[580px]">
                  <img src={skills.image} />
                </div>
                <div>
                  <h2
                    className=""
                    style={{
                      fontSize: "20px",
                      color: "#59B4B2",
                      fontWeight: "bold",
                    }}
                  >
                    {skills.title}
                  </h2>
                  <p className="text-justify">{skills.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
  );
};

export default Skills;
