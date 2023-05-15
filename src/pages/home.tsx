import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import ComponentGrid from '@/components/component-grid/component-grid'
import ReportTable from '@/components/report-table/report-table'
import Reportuser from '@/components/reportuser/reportuser'
import { useEffect, useState } from 'react'
export default function Home() {
  const [report, reportItems] =  useState([] as any);
  useEffect(() =>{
    const fetchData = async () => {
      const res = await fetch("https://jabkhong-backend.vercel.app/api/report");
      const data = await res.json();
      reportItems(data)
    }
    fetchData();
  })
  return (
    <main>
      <Navbar />
      <div className='bg-gradient-to-b from-[#FA9372] to-[#EF709B]'>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-12 lg:py-24">
          <div className="text-center">
            <h1 className="text-6xl text-white font-bold leading-relaxed drop-shadow-md">
            รู้ทันกลโกงมิจฉาชีพ<br />
            ตรวจสอบง่าย<br /> 
            ก่อนเป็นเหยื่อ ! ️
            </h1>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-white'>
      <div className="flex justify-center flex-col gap-8">
      
      <span className='flex justify-center text-xl font-bold mt-8'>ตรวจพบการโกง {report.length} ราย 😡</span>
      <div className='flex flex-col items-center'>
        <div className="my-10 w-8/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
        {reportcheck.map(({ title, description, demo, large }) => (
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
      <div className='bg-[#FA9372]'>
      <div className='flex flex-col items-center'>
      <span className='flex justify-center text-2xl text-white font-bold mt-8'>ร่วมช่วยเหลือแจ้งข้อมูลคนโกง 📢</span>
      <div className="my-10 w-8/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
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
      </div>
      
      <Footerpage/>
    </main>
  )
}
const reportcheck = [
  {
    title: "ตรวจสอบข้อมูลการฉ้อโกง 🔍",
    description:
      "",
    large: true,
    demo: (
      <ReportTable/>
    ),
  }
];

const letreport = [
  {
    title: "แจ้งข้อมูลคนโกง ❗️",
    description:
      "",
    large: true,
    demo: (
      <Reportuser />
    ),
  }
];