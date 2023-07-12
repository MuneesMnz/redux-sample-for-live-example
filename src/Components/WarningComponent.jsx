import React from "react";

const WarningComponent = () => {
  return (
    <>
      <h1 className="text-2xl font-[400] mb-5">Update Your Account</h1>
      <div className="p-2 rounded-lg bg-yellow-200 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ratione
        iure nisi magni placeat non voluptatum aspernatur  <b>MNZ</b>
      </div>
      <div className="py-1 px-2 text-white rounded-full cursor-pointer bg-red-400 w-fit">
        Delete Account
      </div>
      <div className="border border-b-gray-300 my-5"></div>
    </>
  );
};

export default WarningComponent;
