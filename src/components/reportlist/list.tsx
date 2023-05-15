import React from "react";

interface Props {
  name: string;
  bank: string;
  promptpay: string;
  truewallet: string;
  detail: string;
  date: string;
}

export default function Reportlistcard(props: Props) {
    return (
    <div className="w-full max-w-full flex justify-center shadow-md mb-10 border rounded-md bg-white">
      <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="flex flex-row mt-4">
        <h1 className="text-6xl">🙎🏻‍♂️</h1>
        <div className="flex flex-col">
        <div className="text-gray-900 font-bold text-xl mb-2">
          ชื่อ : {props.name}
        </div>
        <p className="text-gray-700 text-base">
          เลขบัญชี : {props.bank}
        </p>
        <p className="text-gray-700 text-base">
          Promptpay : {props.promptpay}
        </p>
        <p className="text-gray-700 text-base">
          Truewallet : {props.truewallet}
        </p>
        <p className="text-gray-700 text-base mt-4">
          วันที่ : {props.date}
        </p>
        </div>
     
        </div>
        <hr className="mt-4"/>
        <p className="text-gray-700 text-base mt-4">
            {props.detail}
        </p>
        <div className="flex flex-row gap-4">
            <img className="w-16 md:w-32 lg:w-48" src="/res/unknown_image.png"/>
            <img className="w-16 md:w-32 lg:w-48" src="/res/unknown_image.png"/>
            <img className="w-16 md:w-32 lg:w-48" src="/res/unknown_image.png"/>
        </div>
      </div>
    </div>
  );
}