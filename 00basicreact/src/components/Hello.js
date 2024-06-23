import React from "react";

const Hello = () => {
  //react component with using jsx
  //   return (
  //     <div>
  //       <h1>Hello Moto</h1>
  //     </div>
  //   );

  //--------------------------------------------------

  //react component without using jsx
  return React.createElement(
    "div",
    { id: "hello", className: "dummyclass" },
    React.createElement("h1", null, "Hello Rocky")
  );
};

export default Hello;
