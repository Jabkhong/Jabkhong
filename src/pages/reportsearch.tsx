import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/navbar'
import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import ComponentGrid from '@/components/component-grid/component-grid'
import ReportTable from '@/components/report-table/report-table'
import Reportuser from '@/components/reportuser/reportuser'
import Reportlistcard from '@/components/reportlist/list'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router'
export default function ReportSearch() {
  const reportName = useRouter()
  const [report, reportItems] = useState<any[]>([]);
  useEffect(() =>{
    const fetchData = async () => {
    const res = await fetch(`https://jabkhong-backend.vercel.app/api/reportrequest?name=${reportName.query.reportName}`);
    const data = await res.json();
    reportItems(data)
    // const dataArr = Object.values(data.name);
  console.log(data)
};
  fetchData();
  }, [reportName]);
  const handleOnSearch = (string: any, results: any) => {
    console.log(string, results)
  }

  const handleOnHover = (result: any) => {
    console.log(result)
  }

  const handleOnSelect = (item: any) => {
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item: { id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }
  return (
    <main>
      <Navbar />
      <div className='bg-gradient-to-b from-[#FA9372] to-[#EF709B]'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-48 lg:py-28">
          <div className="text-center">
            <h1 className="text-5xl text-white font-bold leading-relaxed drop-shadow-md">
            ตรวจสอบข้อมูลการโกง 🔍
            </h1>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-white'>
      <div className="flex justify-center flex-col gap-8">
   
      <div className='flex flex-col items-center'>
        <div className="my-10 w-9/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">

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
      <span className='flex justify-center text-xl font-bold mt-4'>ตรวจพบการโกง {report.length} รายการ 😡</span>
      <div className='flex flex-col items-center'>
        <div className="my-10 w-9/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
          { report.map((item, index) => (
            <div key={index}>
       < Reportlistcard name={item.name} bank={item.bank} promptpay={item.promptpay} truewallet={item.truewallet} date={item.date.toLocaleString("th-TH", { timeZone: "UTC" })} detail={item.detail}/>
       </div>
          ))}
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
    title: "",
    description:
      "",
    large: true,
    demo: (
      <Reportuser />
    ),
  }
];

