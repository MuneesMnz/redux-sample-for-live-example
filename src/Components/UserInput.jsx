import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHello, update } from "../Redux/userSlice";

const UserInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch=useDispatch()
  const handleUpdate=(e)=>{
    e.preventDefault()
    dispatch(addHello({name,email}))
  }
  return (
    <>
      <div className="text-lg font-semibold ">Profile Picture</div>
      <form onSubmit={handleUpdate}>
        <img src="" /> <span className=" text-teal-600 mb-5">Change</span>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-lg ">Username</label>
          <input
            type="text"
            className="border border-gray-400 outline-none w-1/2"
            onChange={(e) => setName(e.target.value)}
            placeholder={user.name}
          />
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-lg ">Email</label>
          <input
            type="text"
            className="border border-gray-400 outline-none w-1/2"
            onChange={(e) => setEmail(e.target.value)}
            placeholder={user.email}
          />
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label className="text-lg ">Password</label>
          <input
            type="password"
            className="border border-gray-400 outline-none w-1/2"
          />
        </div>
        <button
          className="px-3 py-1 cursor-pointer rounded-lg bg-teal-700 text-white"
          type="submit"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UserInput;
