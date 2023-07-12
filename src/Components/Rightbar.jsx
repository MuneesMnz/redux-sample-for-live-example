import React from "react";
import { useSelector } from "react-redux";

const Rightbar = () => {
  const name=useSelector(state=>state.user.name)
  const rightList = [
    {
      title: `Recomended For ${name} `,
      img: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg",
    },
    {
      title: "Popular on Lama app",
      img: "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
    },
    {
      title: "Editor's Choice",
      img: "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg",
    },
  ];
  return (
    <div className="flex-1 h-screen border border-l-gray-300 p-5">
      {rightList.map((item) => {
        return (
          <div key={item.title} className="mb-5">
            <div className="text-lg text-gray-500 mb-3">{item.title}</div>
            <img src={item.img} alt="" className="w-full h-40" />
          </div>
        );
      })}
      <div className="w-full h-14 bg-gray-200 flex justify-center items-center  text-lg cursor-pointer ">
        See More 
      </div>
    </div>
  );
};

export default Rightbar;
