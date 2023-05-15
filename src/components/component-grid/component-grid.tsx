"use client";

import { useState } from "react";
import { useDemoModal } from "./demo-modal";

export default function ComponentGrid() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-1">
      <DemoModal />
      <button
        onClick={() => setShowDemoModal(true)}
        className="flex w-40 items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
      >
        <p className="text-gray-600">Modal</p>
      </button>
    </div>
  );
}