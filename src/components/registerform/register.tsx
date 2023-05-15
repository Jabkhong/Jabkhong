import React from "react";
import { Tooltip, Image,  Button, Input} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import Axios from 'axios'
export default function RegisterForm(this: any) {
  const [nameReg, setNameReg] = useState('')
  const [idCard, setidCard] = useState('')
  const [tel, setTel] = useState('')
  const register = () => {
    Axios.post('https://jabkhong-backend.vercel.app/api/register', {
      name: nameReg, 
      id_card: idCard, 
      tel: tel}).then((response)=>{
        console.log(response);
      });
  };
    return (
      <>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <div className="flex flex-col items-center ">
      <div className="flex flex-col mb-2 justify-center items-center">
      <Input onChange={(e)=> {
        setNameReg(e.target.value)
        }} label="ชื่อ-สกุล" />
      <Input onChange={(e)=> {
        setidCard(e.target.value)}} 
        label="หมายเลขบัตรประชาชน" />
      <Input onChange={(e)=> {
        setTel(e.target.value)}} 
        label="หมายเลขโทรศัพท์" />
   
        </div>
        <div className="my-4 flex flex-col justify-center">
                 <img
          className="h-56 w-full object-cover"
          src="/res/id-card.png"
          />
        <Button flat> อัปโหลดบัตรประชาชน  </Button>
        </div>
        
        <Button onClick={register} shadow color="success" auto>
        ลงทะเบียน 
        </Button>

        <button></button>
        </div>
        </>
    );
  }