import React from "react";
import { Tooltip, Image,  Button} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
export default function reportuser(this: any) {
    return (
      <>
      <div className="flex flex-col items-end">
      <div className="flex flex-row justify-center items-center my-4">
          <img
          className="h-36 w-full object-cover md:h-full md:w-36"
          src="/res/reportregis1.png"
          />
           <img
          className="h-36 w-full object-cover md:h-full md:w-36"
          src="/res/reportregis2.png"
          />
           <img
          className="h-36 w-full object-cover md:h-full md:w-36"
          src="/res/reportregis3.png"
          />
        </div>
        <Link href={"/reportpage"}>
        <Button shadow color="success" auto>
        แจ้งคนโกง 
        </Button>
        </Link>
        </div>
        </>
    );
  }