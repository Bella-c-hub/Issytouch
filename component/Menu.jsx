"use client"
import { useState } from "react"
import Link from "next/link"

function Menu() {

  const [open, setOpen] = useState(false)
  const [num ,setNum] = useState(0)

  const menuList = [
    {title:"Home",address :"/"},
    {title:"About",address :"/about"},
    {title:"Style",address :"/urstyle"},
    {title:"Sign in",address :"/contacts"},
  ]

  const pickNum =(no)=>{
    setNum(no)
  }

  return (
    <div className="left-0 w-full z-50 bg-[#C9A29A]">

      <nav className="flex max-w-7xl mx-auto justify-between items-center p-4">


        <img src="/Logo.png" width={80} height={80} alt="Logo" />

        <ul className="hidden md:flex space-x-6 text-white font-bold items-center">
          
         {
          menuList.map((m,index)=>(
            <li className="hover:text-pink-900 transition" key={index} onClick={()=>pickNum(index)}>
              {
                index ===num?<Link className="text-pink-700" href={m.address}>{m.title}</Link>:<Link href={m.address}>{m.title}</Link>
              }
          </li>
          ))
         }
        </ul>
     
    <button
  onClick={() => setOpen(!open)}
  className="md:hidden text-white text-3xl hover:scale-110 transition cursor-pointer "
>
  ☰
</button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center bg-[#C9A29A] text-white font-bold space-y-4 py-4">
{
          menuList.map((m,index)=>(
            <li className="hover:text-pink-900 transition" key={index} onClick={()=>pickNum(index)}>
              {
                index ===num?<Link className="text-pink-700" href={m.address}>{m.title}</Link>:<Link href={m.address}>{m.title}</Link>
              }
          </li>
          ))
         } 
</ul>
      </div>

    </div>
  )
}

export default Menu