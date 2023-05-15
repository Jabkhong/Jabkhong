import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'ตรวจสอบข้อมูลการโกง', href: '#', current: true },
  { name: 'แจ้งโกง', href: '#', current: false },
]

function classNames(...classNamees: string[]) {
  return classNamees.filter(Boolean).join(' ')
}

export default function footerpage() {
  return (
    <footer className="footer bg-neutral-900 relative pt-1">
    <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-white font-bold mb-2">
                    © 2023 
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}
