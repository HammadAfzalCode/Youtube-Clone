import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "News",
    "Cooking",

    "Drama",
    "Season",
    "Javascript",
    "React",
  ];
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
