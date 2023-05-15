import React from 'react';
import * as Form from '@radix-ui/react-form';
import Datepick from '../datepicker/datepicker';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Dropdown, Input } from "@nextui-org/react";
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Axios from 'axios'
import Link from 'next/link';

export default function FormDemo(tthis: any) {
  const [selected, setSelected] = React.useState('ชื่อบัญชี');
  const [name, setName] = useState('')
  const [details, setdetails] = useState('')
  const [bank, setBank] = useState('')
  const [promptpay, setpromptpay] = useState('')
  const [truewallet, settruewallet] = useState('')

  const report = () => {
    Axios.post('https://jabkhong-backend.vercel.app/api/reportwaitlist', {
      name: name, 
      details: details, 
      bank: bank,
      promptpay: promptpay,
      truewallet: truewallet
      }).then((response)=>{
        console.log(response);
      });
  }
const handleChange = (event: SelectChangeEvent) => {
  setSelected(event.target.value as string);
};
return (
  <>
      <div className="flex flex-col m-4 justify-center">
      <Input onChange={(e)=> {
        setName(e.target.value)
        }} label="ชื่อ - สกุล" />
        <Input onChange={(e)=> {
        setdetails(e.target.value)
        }} label="รายละเอียด" />
         <Input onChange={(e)=> {
        setBank(e.target.value)
        }} label="เลขบัญชีธนาคาร" />
        <Input onChange={(e)=> {
        setpromptpay(e.target.value)
        }} label="PromptPay" />
        <Input onChange={(e)=> {
        settruewallet(e.target.value)
        }} label="Truewallet" />
        <div className='flex flex-col justify-center m-4'>
        <Button onClick={report} shadow color="success" auto>
        ยืนยันการแจ้งโกง
        </Button>
        </div>


        <div className="w-full flex justify-center shadow-md mb-10 border rounded-md bg-white">
      <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex flex-row mt-4">
        <h1 className="text-6xl">🙎🏻‍♂️</h1>
        <div className="flex flex-col justify-left items-start">
        <div className="text-gray-900 font-bold text-xl mb-2">
          ชื่อ : {name}
        </div>
        <p className="text-gray-700 text-base">
          เลขบัญชี : {bank}
        </p>
        <p className="text-gray-700 text-base mt-4">
          วันที่ : {'12 เมษายน 2566'}
        </p>
        </div>
     
        </div>
        <hr className="mt-4"/>
        <p className="text-gray-700 text-base mt-4">
            {details}
        </p>
        <div className="flex flex-row justify-center gap-4">
            <img className="w-16 md:w-32 lg:w-48" src="/res/unknown_image.png"/>
            <img className="w-16 md:w-32 lg:w-48" src="/res/unknown_image.png"/>
        </div>
        </div>
      </div>
    </div>
  </>
);}