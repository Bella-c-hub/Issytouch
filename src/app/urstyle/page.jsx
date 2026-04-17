import Link from "next/link"; 

import Image from "next/image"

export default function YourStyle() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-pink-600 mt-10 mb-10">
        Your Style
      </h1>

     
     <div className="flex flex-col items-center gap-6 px-6 pb-12 max-w-6xl w-full">
      <div>
<h1 className="text-2xl font-bold text-pink-400 mt-10 mb-10">Do you like a boyish style?</h1>
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/black tomboy.jpg" alt="style" width={300} height={300}/>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/download.jpg" alt="style" width={300} height={300} />
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/gir.jpg" alt="style" width={300} height={300}/>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/tom.jpg" alt="style" width={300} height={300}/>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/KYA.jpg" alt="style" width={300} height={300}/>
        </div>

           <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/ig_ elliooo8.jpg" alt="style" width={300} height={300}/>
        </div>
      </div>

 <div >
<h1 className="text-2xl font-bold text-pink-400 mt-10 mb-10">Or maybe a more feminine style?</h1>
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/crop.jpg" alt="style" width={300} height={300}/>
        </div>

         <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/Cute outfit of the day.jpg" alt="style" width={300} height={300}/>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/Cute.jpg" alt="style" width={300} height={300}/>
        </div>

  <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/dress.jpg" alt="style" width={300} height={300}/>
        </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/skirt.jpg" alt="style" width={300} height={300}/>
        </div>

 <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/Outfit.jpg" alt="style" width={300} height={300}/>
        </div>
</div>

<div>
      <h1 className="text-2xl font-bold text-pink-400 mt-10 mb-10">or a more dangerous style?</h1>

              <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/m.jpg" alt="style" width={300} height={300}/>
        </div>

         <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/m dress.jpg" alt="style" width={300} height={300}/>
        </div>

        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/mafia.jpg" alt="style" width={300} height={300}/>
        </div>

  <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/download 5.jpg" alt="style" width={300} height={300}/>
        </div>

          <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/chain.jpg" alt="style" width={300} height={300}/>  
        </div>

 <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition">
          <Image src="/c..jpg" alt="style" width={300} height={300}/> 
        </div>

      <div className="flex justify-center mt-10 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition">
 <Link href="/urstyle">
          Sign in
        </Link>
      </div>
     
        </div>
      </div>
      </div>
  )
}