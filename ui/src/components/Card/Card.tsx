import React from "react";

interface Props {
    to: string;
    titleText: string;
    bodyText: string;
  }


const Card = ({ to, titleText, bodyText }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg w-auto h-36">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="p-2 flex flex-col justify-start">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{titleText}</h5>
          <p className="text-gray-700 text-sm mb-4">
            {bodyText}
          </p>
          <p className="text-gray-600 text-xs">Click here</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
