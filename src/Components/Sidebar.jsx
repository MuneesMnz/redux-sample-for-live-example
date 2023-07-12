import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const name = useSelector((state) =>state.user.userInfo.name);
  const sidebarList = [
    "Home",
    "List",
    "Product",
    "Group",
    "Pages",
    "Photos",
    "Videos",
    "Schedule",
    "Wishlist",
    "Settings",
  ];
  const text = "Logout";
  return (
    <div className="flex-1 h-screen border border-r-gray-300 p-6  cursor-pointer ">
      {sidebarList.map((list) => {
        return (
          <div
            key={list}
            className="text-xl mb-1 p-2 rounded text-center hover:bg-gray-200 "
          >
            {list}
          </div>
        );
      })}
      <div className="text-xl mb-1 p-2 rounded text-center hover:bg-gray-200 ">
        <span>{text}</span>
        {text === "Logout" && `(${name})`}
      </div>
    </div>
  );
};

export default Sidebar;
