import React, { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import { Table, Input, Spacer,Tooltip, Dropdown } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from "next/router";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function ReportTable(this: any) {
  const router = useRouter();
  const [report, reportItems] =  useState([] as any);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([] as any);
  useEffect(() =>{
    const fetchData = async () => {
      const res = await fetch("https://jabkhong-backend.vercel.app/api/report");
      const data = await res.json();
      reportItems(data)
    }
    
    fetchData();
  }, []);
  const onChangeHandler = (text: any) => {
    let matches: React.SetStateAction<never[]> = []
    if(text.length > 0){
      matches = report.filter((rep: { name: string; }) => {
        const regex = new RegExp(`${text}`, "gi");
        return rep.name.match(regex);
      })
    }
    console.log('matches',matches);
    setSuggestions(matches);
    setText(text)
  }
  const search = () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: <p>ตรวจสอบการโกง</p>
    })
  }
  const [selected , setSelected] = React.useState('ชื่อบัญชี');
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };
    return (
      <>
      <div>
      <div className="flex flex-col">
      <div className="flex flex-row gap-2 justify-center ">
      <div className="md:w-full">
      <input className="w-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="report" type="text" onChange={e=> onChangeHandler(e.target.value)} placeholder="ค้นหา"></input>
          </div>
        <div className="md:w-8">
        <Dropdown>
      <Dropdown.Button flat>{selected}</Dropdown.Button>
      <Dropdown.Menu 
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        disabledKeys={["เบอร์มือถือ", "เลขบัญชีธนาคาร","Promptpay","Truewallet"]}
      >
        <Dropdown.Item key="ชื่อบัญชี">ชื่อบัญชี</Dropdown.Item>
        <Dropdown.Item key="เบอร์มือถือ">เบอร์มือถือ</Dropdown.Item>
        <Dropdown.Item key="เลขบัญชีธนาคาร">เลขบัญชีธนาคาร</Dropdown.Item>
        <Dropdown.Item key="Promptpay">Promptpay</Dropdown.Item>
        <Dropdown.Item key="Truewallet">Truewallet</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
    </div>
    <div className="flex flex-col justify-center mt-4">
    {suggestions && suggestions.map((suggestion : any, i : any)=>
            <button key={i} className="suggestion w-full"><Link href={{ pathname:'/reportsearch/', query : {reportName: suggestion.name}}}>{suggestion.name}</Link></button>
    )}
    </div>
    </div>
    </div>
        </>
    );
  }