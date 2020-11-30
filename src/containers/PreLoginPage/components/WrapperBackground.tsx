import React from "react";
import "./wrapper.css";
interface Iprops {
  // children: any;
}
const WrapperBackground: React.FC<Iprops> = (props: Iprops) => {
  return (
    <div className="wrapper">
      <div className="container"></div>
      <ul className="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
};

export default WrapperBackground;
