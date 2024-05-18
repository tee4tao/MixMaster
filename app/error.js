"use client";

const error = (error) => {
  return <div className="text-error text-center">
    <h2 className="text-2xl"> Sorry, an error has occured!!!</h2>
    <p>Error: {error.error.message}</p>
    </div>;
};

export default error;