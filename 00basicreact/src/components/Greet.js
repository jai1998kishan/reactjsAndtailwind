import React from "react";

// const Greet = () => <h1>Hello Mahi</h1>;
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
// const Greet = ({ name = "Jai" }) => <h1>Hello {name}</h1>;

export default Greet;
