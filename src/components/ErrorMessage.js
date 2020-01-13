import React from "react";

export const ErrorMessage = ({ message }) => {
  console.log(message);
  return (
    <p>
      Something went wrong! <br />
      {message}
    </p>
  );
};
