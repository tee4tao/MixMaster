"use client";

import Link from "next/link";

const error = (error) => {
  return <div className="text-error text-center mt-12">
    <h2 className="text-2xl"> Sorry, an error has occured!!!</h2>
    <p>Error: {error.error.message}</p>
    <Link href={"/"} className="btn btn-error btn-sm mt-12">Home Page</Link>
    </div>;
};

export default error;