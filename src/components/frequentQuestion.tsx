import data from "./faqData";
const frequentQuestion = () => {
  return (
    <div className="bg-gray-600 ">
      {data.map((data) => (
        <div key={data.id} className="p-2 flex justify-center items-center">
          <div
            id="question"
            className=" bg-white "
            onClick={() => {
              alert(`${data.id}`);
            }}
          >
            {data.question}
          </div>
        </div>
      ))}
    </div>
  );
};

export default frequentQuestion;
