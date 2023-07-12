import React from 'react'

const Sidebar = () => {
const sidebarList=["Home","List","Product","Group","Pages","Photos","Videos","Schedule","Wishlist","Settings" ,"Logout (MNZ)"]

  return (
    <div className='flex-1 h-screen border border-r-gray-300 p-6  cursor-pointer '>
     {
        sidebarList.map((list)=>{
            return (
                <div key={list} className='text-xl mb-1 p-2 rounded text-center hover:bg-gray-200 ' >
                    {list}
                </div>
            )
        })
     }
    </div>
  )
}

export default Sidebar
