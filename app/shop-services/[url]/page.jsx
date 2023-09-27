import React from "react";

const Summary = ({ params }) => {
  const { url } = params;
  console.log("url", url);
  return <div>Summary</div>;
};

export default Summary;
