import React from "react";
import RegisterForm from "../RegisterPage";

const Page2 = () => {
  return (
    <div className="w-full min-h-screen py-12 text-center text-white bg-black">
      <h1 className="text-3xl font-bold my-5">Walchand Linux Users` Group</h1>
      <h2 className="text-2xl font-semibold my-2">Member Board Drive 1</h2>
      <p className="text-lg my-2 mb-8 w-[29%] text-center mx-auto">
        Prepare to join a vibrant community of Linux enthusiasts and emerse
        yourself in the dynamic world of Open Source.
      </p>
      <RegisterForm />
    </div>
  );
};

export default Page2;
