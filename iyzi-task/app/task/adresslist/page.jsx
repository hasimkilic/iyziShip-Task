import Image from 'next/image'
import React from 'react'
import Copy from "@/public/copy.svg"
const AdressList = () => {
  const navigations = [
    {
      id: 1,
      title: "Başlık",
      desc: "Ev"
    },
    {
      id: 2,
      title: "Adres",
      desc: "15 Temmuz Mah. Güneşli, 15 Temmuz Mah. Koçman Cd. Demirkol Plaza 54E"
    },
    {
      id: 3,
      title: "Posta Kodu",
      desc: "34212"
    },
    {
      id: 4,
      title: "Semt",
      desc: "Bağcılar"
    },
    {
      id: 5,
      title: "Şehir",
      desc: "İstanbul"
    }
  ];
  
  return (
    <div className="bg-white w-full mx-auto rounded-xl px-8 py-12 h-fit flex justify-start">
      <div className='flex flex-wrap justify-start w-full gap-y-8 gap-x-10'>
        <div className='flex-col flex-grow basis-[250px] border border-solid border-[#007FFF] h-40 rounded-xl py-2 px-4'>
          {navigations.map((navigation) => {
            return (
              <div key={navigation.id} className='flex justify-between items-center my-2'>
                <span className='font-bold text-xs mr-3'>{navigation.title}</span>
                <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>{navigation.desc}  <Image src={Copy} alt={"copy"} className='cursor-pointer' /></span>
              </div>
            )
          })}
        </div>
        <div className='flex-col flex-grow basis-[250px] border border-solid border-[#007FFF] h-40 rounded-xl py-2 px-4'>
          {navigations.map((navigation) => {
            return (
              <div key={navigation.id} className='flex justify-between items-center my-2'>
                <span className='font-bold text-xs mr-3'>{navigation.title}</span>
                <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>{navigation.desc}  <Image src={Copy} alt={"copy"} className='cursor-pointer' /></span>
              </div>
            )
          })}
        </div>
        <div className='flex-col flex-grow basis-[250px] border border-solid border-[#007FFF] h-40 rounded-xl py-2 px-4'>
          {navigations.map((navigation) => {
            return (
              <div key={navigation.id} className='flex justify-between items-center my-2'>
                <span className='font-bold text-xs mr-3'>{navigation.title}</span>
                <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>{navigation.desc}  <Image src={Copy} alt={"copy"} className='cursor-pointer' /></span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AdressList