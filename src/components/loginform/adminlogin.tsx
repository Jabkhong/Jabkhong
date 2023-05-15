import React from "react";
import { Tooltip, Image,  Button, Input} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




export default function AdminForm(this: any) {
const MySwal = withReactContent(Swal)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    if(username === 'jabkhong2023' && password === 'jabkhong2023'){
          MySwal.fire({
            title: <p>Success!</p>
          }).then(() => {
            localStorage.setItem('admin_login', 'login');
            window.location.href = "/accept";
          })

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    }
  };
    return (
      <>
      <div className="flex flex-col items-center ">
      <div className="flex flex-col mb-2">
      <Input onChange={(e)=> {
        setUsername(e.target.value)
        }} label="username" />
      <Input onChange={(e)=> {
        setPassword(e.target.value)
        }} label="password" />
        </div>
        <Button onClick={login} shadow color="success" auto>
        เข้าสู่ระบบ 
        </Button>
        <Link className="mt-4" href="/register">ลงทะเบียน</Link>
        </div>
        </>
    );
  }