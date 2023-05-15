import React from "react";
import { Tooltip, Image,  Button, Input} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import Axios from 'axios';
export default function Loginform(this: any) {
  const [idCard, setidCard] = useState('')
  const [tel, setTel] = useState('')
  const login = () => {
    Axios.post('https://jabkhong-backend.vercel.app/api/login', {
      id_card: idCard, 
      tel: tel}).then((response)=>{
        console.log(response);
      });
  };
    return (
      <>
       <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <div className="flex flex-col items-center ">
      <div className="flex flex-col mb-2">
      <Input onChange={(e)=> {
        setTel(e.target.value)
        }} label="หมายเลขโทรศัพท์" />
      <Input onChange={(e)=> {
        setidCard(e.target.value)
        }} label="หมายเลขบัตรประชาชน 13 หลัก" />
        </div>
        <Button onClick={login} shadow color="success" auto>
        เข้าสู่ระบบ 
        </Button>
        <Link className="mt-4" href="/register">ลงทะเบียน</Link>
        </div>
        </>
    );
  }