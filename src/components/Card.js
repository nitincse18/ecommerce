import React from "react";


const Card = ({ name, pik }) => {
  return (
    <div className="flex flex-wrap border border-gray-500 mx-2 rounded-md p-1 w-52">
      <a className="text-center" href="/">
        <img className="h-56 p-2 mx-2 justify-between" src={pik} alt="mobile" />
        {name}
      </a>
    </div>
  );
};

export default Card;
