import React, { useEffect } from "react";
import { Table, Input, Spacer,Tooltip, Dropdown, Button } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { useState } from "react";
import Link from "next/link";
import { useDemoModal } from '@/components/component-grid/demo-modal'

export default function ReportTable(this: any) {
  const [report, reportItems] = useState<any[]>([]);
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(`https://jabkhong-backend.vercel.app/api/reportwaitlist`)
      const data = await res.json();
      reportItems(data)
    }
    fetchData();
  })
    return (
      <>
      <div className="flex flex-col">
      <div className="flex flex-row justify-center ">
    </div>
    <div className="flex-1 justify-center pt-4">
        <Table
          aria-label="Example static collection table"
          css={{
            height: "auto",
            minWidth: "60rem",
            textAlign: "left",
          }}
          selectionMode="single"
        >
          <Table.Header>
            <Table.Column>id</Table.Column>
            <Table.Column>ชื่อ</Table.Column>
            <Table.Column>รายละเอียด</Table.Column>
            <Table.Column>ธนาคาร</Table.Column>
            <Table.Column>PromptPay</Table.Column>
            <Table.Column>truewallet</Table.Column>
            <Table.Column>image</Table.Column>
            <Table.Column>สถานะ</Table.Column>
            <Table.Column>ตรวจสอบ</Table.Column>
          </Table.Header>
          <Table.Body>
            {report.map(rep => (
            <Table.Row key={rep.id}>
              <Table.Cell>{rep.id}</Table.Cell>
              <Table.Cell>{rep.name}</Table.Cell>
              <Table.Cell>{rep.details}</Table.Cell>
              <Table.Cell>{rep.bank}</Table.Cell>
              <Table.Cell>{rep.promptpay}</Table.Cell>
              <Table.Cell>{rep.truewallet}</Table.Cell>
              <Table.Cell>{rep.image}</Table.Cell>
              <Table.Cell>{rep.status}</Table.Cell>
              <Table.Cell><Button size="sm" >ยืนยัน</Button></Table.Cell>
            </Table.Row>
))}
          </Table.Body>
        </Table>
        </div>
        </div>
        </>
    );
  }