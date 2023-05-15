import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Button } from "@nextui-org/react";
function SideNavbar() {
  const handleLogout = () => {
    localStorage.removeItem("admin_login");
    window.location.href = "/admin_login";
  };
  const [report, reportItems] = useState<any[]>([]);
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(`https://jabkhong-backend.vercel.app/api/reportwaitlist`)
      const data = await res.json();
      reportItems(data)
    }
    fetchData();
  })
  return (
    <div>
        
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
       </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-2xl text-center cursor-pointer font-bold text-dark-900 border-b border-gray-100 pb-4 w-full">
              จับโกง ! 🔍
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex  mb-2 justify-start items-center gap-4 pl-3 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="/accept">
                  อนุมัติการแจ้งโกง ({report.length}) 🔔
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-3 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="/cheatreport">
                  การโกง
                </Link>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl- hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <Link className="text-base text-gray-800 group-hover:text-white font-semibold " href="/user">
                  รายชื่อผู้ใช้
                </Link>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-3 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <button onClick={handleLogout} className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;