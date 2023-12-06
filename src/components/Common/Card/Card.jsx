import React from "react";
import BPImage from "components/Elements/BPImage";

function Card(item) {
  return (
    <div className="grid grid-cols-3 w-full h-[207px] rounded-lg shadow-md">
      <div className="col-span-2 px-2 flex justify-between items-center py-3">
        <div>
          <BPImage
            src={item?.currency1?.image}
            alt={"pic"}
            className={"w-[50px] h-[50px] rounded-lg"}
          />
          <p>{`Name : ${item?.currency1?.title}/${item?.currency1?.title_fa}`}</p>
          <p>{`Code : ${item?.currency1?.code}`}</p>
        </div>
        <div>
          <BPImage
            src={item?.currency2?.image}
            alt={"pic"}
            className={"w-[50px] h-[50px] rounded-lg"}
          />
          <p>{`Name : ${item?.currency2?.title}/${item?.currency1?.title_fa}`}</p>
          <p>{`Code : ${item?.currency2?.code}`}</p>
        </div>
      </div>
      <p>{`Price : ${item?.price}`}</p>
    </div>
  );
}

export default Card;
