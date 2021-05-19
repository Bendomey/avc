import * as React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const LoadMe = () => {
  return (
    <React.Fragment>
      <div className={"h-screen w-screen flex justify-center items-center"}>
        <PuffLoader color={"#E21E47"} size={70} />
      </div>
    </React.Fragment>
  );
};

export { LoadMe };
