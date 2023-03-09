const Sidebar = () => {
   return (
    <>
       <div className="w-[300px] fixed left-[-340px] top-0 shadow-md  h-[100vh] bg-white pt-4 sidebar ease-in-out duration-200 z-50">
           <div className="absolute -right-10 bg-[#030303] top-1/2 p-3 cursor-pointer" id="side-close">
               <i className="fa-solid fa-arrow-left text-white"></i>
            </div>
           <div className="flex justify-center items-center relative">
               <p className="nav-font text-2xl">
                    FoodHub
                </p>
           </div>
       </div>
    </>
   )
}

export default Sidebar;