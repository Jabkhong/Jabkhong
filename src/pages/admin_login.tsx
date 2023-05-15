import Footerpage from '@/components/footer/footerpage'
import Card from '@/components/card/card'
import AdminLogin from '@/components/loginform/adminlogin'
export default function admin_login() {
  return (
    <main>
      <div className='bg-[#28B67A]'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-6xl text-white font-bold leading-relaxed drop-shadow-md">
            เข้าสู่ระบบ Admin 🔑
            </h1>
          </div>

<div className="flex justify-center flex-col gap-8">
      <div className='flex flex-col items-center'>
        <div className="my-10 w-8/12 max-w-screen-xl animate-fade-up gap-5 px-5 xl:px-0">
        {reportcheck.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              // title === "Beautiful, reusable components" ? (
              //   <ComponentGrid />
              // ) : (
                demo
              // )
            }
            large={large}
          />
        ))}
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <Footerpage/>
    
    </main>
    
  )
}
const reportcheck = [
  {
    title: "กรอกข้อมูลเพื่อเข้าสู่ระบบ",
    description:
      "",
    large: true,
    demo: (
      <AdminLogin/>
    ),
  }
];
