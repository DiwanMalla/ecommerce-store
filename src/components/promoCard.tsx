const promoCard = () => {
  return (
    <div id="outside wrapper" className="bg-gray-100">
      <div id="container" className="flex">
        <div id="firstColumn" className="w-[750px] h-[200px] m-3">
          <img
            src="src/components/images/entertainment.jpg"
            className="h-[450px]"
          ></img>
        </div>
        <div id="secondColumn">
          <div id="first-row" className="m-3 w-[320px] ">
            <img src="src/components/images/leatherBag.jpg" className=""></img>
          </div>
          <div id="first-row" className="m-3 w-[320px] bg-gray-400">
            <img
              src="src/components/images/BlenderCombo.jpg"
              className="h-[230px] w-[320px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default promoCard;
