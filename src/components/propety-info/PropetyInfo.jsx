import React, { Children } from "react";

const PropetyInfo = ({ children, gray }) => {
  return (
      <div
        className={`flex gap-1 text-sm items-center font-medium ${
          gray && "text-color-ADADAD"
        }`}
      >
        {Children.map(children, (child) => (
          <div>{child}</div>
        ))}
      </div>
  );
};

export default PropetyInfo;
