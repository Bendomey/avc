import * as React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const CenterLoaders = () => {
  return (
    <React.Fragment>
      <div
        className={
          "absolute z-10 w-screen h-screen flex justify-center items-center"
        }
      >
        <PuffLoader color={"#E21E47"} size={40} />
      </div>
    </React.Fragment>
  );
};

export default CenterLoaders;
