import React from "react";

const UserInput = () => {
  return (
    <>
      <div className="text-lg ">Profile Picture</div>
      <form className=" ">
        <img src="" /> <span className=" text-teal-600 mb-5" >Change</span>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-lg ">Username</label>
          <input type="text" className="border border-gray-400 outline-none w-1/2"  />
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-lg ">Email</label>
          <input type="email" className="border border-gray-400 outline-none w-1/2" />
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-lg ">Password</label>
          <input type="password" className="border border-gray-400 outline-none w-1/2" />
        </div>
        <button className="px-3 py-1 cursor-pointer rounded-lg bg-teal-700 text-white" >Update</button>
      </form>
    </>
  );
};

export default UserInput;
