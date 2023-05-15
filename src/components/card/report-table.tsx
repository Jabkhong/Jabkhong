import React, { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";
import { Table, Input, Spacer,Tooltip, Dropdown } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRouter } from "next/router";
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
  const [selected, setSelected] = React.useState('ชื่อบัญชี');
  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };
    return (
      <>
      <div className="flex flex-col">
      <div className="flex flex-row gap-2 justify-center ">
      <div className="md:w-48">
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={e=> onChangeHandler(e.target.value)} placeholder="Username"></input>
          </div>
        <div className="md:w-8">
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'ชื่อบัญชี'}>ชื่อบัญชี</MenuItem>
          <MenuItem value={'เบอร์มือถือ'}>เบอร์มือถือ</MenuItem>
          <MenuItem value={'เลขบัญชีธนาคาร'}>เลขบัญชีธนาคาร</MenuItem>
          <MenuItem value={'Promptpay'}>Promptpay</MenuItem>
          <MenuItem value={'Truewallet'}>Truewallet</MenuItem>
        </Select>
        </div>
    </div>
    {suggestions && suggestions.map((suggestion : any, i : any)=>
            <button key={i} className="suggestion col-md-12 justify-content-md-center"><Link href={{ pathname:'/reportsearch/', query : {reportName: suggestion.name}}}>{suggestion.name}</Link></button>
    )}
    </div>
    
   
        </>
    );
  }