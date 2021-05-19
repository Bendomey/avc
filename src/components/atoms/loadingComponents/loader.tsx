import * as React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  return (
    <React.Fragment>
      <PuffLoader color={"red"} size={50} />
    </React.Fragment>
  );
};

export default Loader;
