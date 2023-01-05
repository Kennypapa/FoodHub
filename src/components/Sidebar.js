const Sidebar = () => {
   return (
    <>
       <div className="w-[300px] fixed left-0 top-0 shadow-md  h-[100vh] bg-white pt-4">
           <div className="absolute -right-10 bg-[#030303] top-1/2 p-3">
               <i class="fa-solid fa-arrow-left text-white"></i>
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

export default Sidebar