import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const name=useSelector(state=>state.user.userInfo.name)
  return (
    <div className=" min-w-full h-12 border-b flex justify-between items-center ">
      <h1 className="flex-1 text-2xl text-blue-800 font-bold ml-3 ">MNZ APP</h1>
      <div className=" flex-[2] flex gap-5 text-lg ">
        <div className=" cursor-pointer ">Home</div>
        <div className=" cursor-pointer ">About</div>
        <div className=" cursor-pointer ">Contact</div>
      </div>
      <input
        type="text"
        className="flex-[2] w-full border border-gray-500 px-5 py-0.5 outline-none rounded-xl  placeholder:text-gray-400"
        placeholder="Search for something..."
      />
      <div className="flex-1 flex justify-end mr-3 cursor-pointer ">
        <img src="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Navbar;
