import React, { useEffect } from "react";
import { Table, Input, Spacer,Tooltip, Dropdown, Button } from "@nextui-org/react";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { useState } from "react";
import Link from "next/link";
import { useDemoModal } from '@/components/component-grid/demo-modal'

export default function CheatTable(this: any) {
  const [users, userItems] = useState<any[]>([]);
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch(`https://jabkhong-backend.vercel.app/api/login`)
      const data = await res.json();
      userItems(data)
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
            <Table.Column>เลขบัตรประชาชน</Table.Column>
            <Table.Column>เบอร์มือถือ</Table.Column>
            <Table.Column>ภาพถ่ายบัตรประชาชน</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map(user => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.id_card}</Table.Cell>
              <Table.Cell>{user.tel}</Table.Cell>
              <Table.Cell>None</Table.Cell>
            </Table.Row>
))}
          </Table.Body>
        </Table>
        </div>
        </div>
        </>
    );
  }