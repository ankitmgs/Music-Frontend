import React from "react";
import { Puff } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <Puff
        height="150"
        width="150"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
