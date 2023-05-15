import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/navbar/sidebar'
import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import ComponentGrid from '@/components/component-grid/component-grid'
import DataTable from '@/components/report-table/data-table'
import Reportuser from '@/components/reportuser/reportuser'
import React, { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
  const token = localStorage.getItem('admin_login');

  if(!token){
    window.location.href = "/admin_login";
  }
},[])
  return (
    <main>
      <Sidebar />
      <div className='bg-[#28B67A] h-screen'>
      <div className="relative isolate px-6 pt-7 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-16 lg:py-16">
          <div className="text-center">
          <h1 className="text-6xl text-white font-bold leading-relaxed drop-shadow-md">
            จับโกง ! 🔍
            </h1>
            </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-8">
            <div className="my-10 w-8/12 max-w-screen-xl animate-fade-up gap-5 px-5 pb-16 xl:px-0">
          {letreport.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              // title === "Beautiful, reusable components" ? (
              //   <ComponentGrid />
              // ) : (
                demo
              // )
            }
            large={large}
          />
        ))}
      </div>
          </div>
         
        </div>
    
      </div>
    </main>
  )
}

const letreport = [
  {
    title: "อนุมัติการแจ้งโกง",
    description:
      "",
    large: true,
    demo: <DataTable/>
  }
];