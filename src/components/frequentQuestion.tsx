import data from "./faqData";
import { useState } from "react";

const frequentQuestion = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const handleClicked = (selectedId: any) => {
    if (selected.includes(selectedId)) {
      setSelected(selected.filter((item) => item != selectedId));
    } else {
      setSelected([...selected, selectedId]);
    }
  };
  return (
    <div className="bg-gray-600 min-h-screen  flex flex-col justify-center items-center py-8">
      <h1
        style={{ fontSize: "25px", background: "white" }}
        className="rounded p-2 mb-3"
      >
        Frequent Ask Questions
      </h1>
      <div
        id="wrapper"
        className=" grid grid-rows-4 grid-cols-1 sm:grid-cols-2 max-w-4xl"
      >
        {data.map((data) => (
          <div key={data.id} className="p-2">
            <div
              id="question"
              className=" bg-white rounded p-4 flex justify-between cursor-pointer w-[400px]"
              onClick={() => {
                handleClicked(data.id);
              }}
            >
              <h2>{data.question}</h2>
              <span>{selected.includes(data.id) ? "-" : "+"}</span>
            </div>
            {selected.includes(data.id) && (
              <div className="bg-gray-400 rounded-md mt-2 p-4">
                <span>{data.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default frequentQuestion;
