import React from "react";
import { Tooltip, Image,  Button} from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
export default function Graph(this: any) {
    return (
      <>
      <div className="flex flex-col items-end">
      <div className="flex flex-row justify-center items-center my-4">
          <img
          className="h-56 w-full object-cover md:h-full md:w-72"
          src="/res/graph.png"
          />
          <img
          className="h-56 w-full object-cover md:h-full md:w-72"
          src="/res/graph.png"
          />
        </div>
        </div>
        </>
    );
  }