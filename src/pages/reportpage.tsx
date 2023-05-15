import Navbar from '@/components/navbar/navbar'
import Footerpage from '@/components/footer/footerpage'
import ReportTable from '@/components/report-table/report-table'
import { Dropdown, Input, Button } from '@nextui-org/react'
import React from 'react'
import ReportForm from '@/components/reportform/form'
import Card from '@/components/card/card'
import Reportlistcard from '@/components/reportlist/list'
export default function ReportPage() {
    const menuItems = [
        { key: "name", name: "ชื่อบัญชี" },
        { key: "tel", name: "เบอร์มือถือ" },
        { key: "bank", name: "เลขบัญชีธนาคาร" },
        { key: "promptpay", name: "Promptpay" },
        { key: "truewallet", name: "Truewallet" },
      ];
      const [selected, setSelected] = React.useState(new Set(["name"]));
    
      const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
      );
  return (
    <main>
      <Navbar />
      <div className='bg-[#1E1E1E] '>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-3xl py-16 sm:py-48 lg:py-28">
          <div className="text-center">
            <div className='flex flex-col items-center justify-center'>
            <h1 className="text-5xl text-[#FA9372] font-bold leading-relaxed drop-shadow-md">
            แจ้งข้อมูลคนโกง
            </h1>
            <h2 className='text-2xl text-white font-bold'>กรอกรายละเอียด</h2>
            <img className='object-contain h-48 w-96 mt-4' src='/res/phone1.png'/>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#1E1E1E]'>
      <div className="flex justify-center flex-col gap-8">
      <div className='flex flex-col items-center'>
        <div className="my-10 w-[65%] animate-fade-up gap-5 px-5 xl:px-0">
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
      </div>
      </div>
      </div>
      <Footerpage/>
    </main>
  )
}
const reportcheck = [
  {
    title: "แจ้งโกง 🔍",
    description:
      "",
    large: true,
    demo: (
      <ReportForm/>
    ),
  }
];

