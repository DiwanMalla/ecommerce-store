import data from "./faqData";
import { useState } from "react";
const frequentQuestion = () => {
  const [selected, setSelected] = useState([]);
  const handleClicked = (selectedId: any) => {
    if (selected.includes(selectedId)) {
      setSelected(selected.filter((item) => item != selectedId));
    } else {
      setSelected([...selected, selectedId]);
    }
  };
  return (
    <div className="bg-gray-600 flex justify-center">
      <div id="wrapper" className="w-[400px]">
        {data.map((data) => (
          <div key={data.id} className="p-2">
            <div
              id="question"
              className=" bg-white p-2 flex justify-between"
              onClick={() => {
                handleClicked(data.id);
              }}
            >
              <h2>{data.question}</h2>
              <span>{selected.includes(data.id) ? "-" : "+"}</span>
            </div>
            <div className="bg-gray-400">
              <span>{selected.includes(data.id) && data.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default frequentQuestion;
