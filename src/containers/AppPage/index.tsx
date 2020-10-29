import React from "react";

interface Iprops {
  name?: string;
}

const AppPage: React.FC<Iprops> = (props: Iprops) => {
  return <h1>welcome to AppPage!</h1>;
};
export default AppPage;
