"use client";
import Image from 'next/image'
// import React, { useState, useEffect } from 'react'
import Copy from "@/public/copy.svg"

const AdressList = () => {
  return (
    <div className="bg-white w-full mx-auto rounded-xl px-8 py-12 h-fit flex justify-start">
      <div className='flex flex-wrap justify-start w-full gap-y-8 gap-x-10'>
        <div className='flex-col flex-grow basis-[250px] border border-solid border-[#007FFF] h-40 rounded-xl py-2 px-4'>
          <div className='flex justify-between items-center my-2'>
            <span className='font-bold text-xs mr-3'>Başlık</span>
            <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>Ev <Image src={Copy} alt="copy" className='cursor-pointer' /></span>
          </div>
          <div className='flex justify-between items-center my-2'>
            <span className='font-bold text-xs mr-3'>Adres</span>
            <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>Ev <Image src={Copy} alt="copy" className='cursor-pointer' /></span>
          </div>
          <div className='flex justify-between items-center my-2'>
            <span className='font-bold text-xs mr-3'>Posta Kodu</span>
            <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>Ev <Image src={Copy} alt="copy" className='cursor-pointer' /></span>
          </div>
          <div className='flex justify-between items-center my-2'>
            <span className='font-bold text-xs mr-3'>Semt</span>
            <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>Ev <Image src={Copy} alt="copy" className='cursor-pointer' /></span>
          </div>
          <div className='flex justify-between items-center my-2'>
            <span className='font-bold text-xs mr-3'>Şehir</span>
            <span className='text-[#7C7C7A] text-[10px] flex gap-x-1'>Ev <Image src={Copy} alt="copy" className='cursor-pointer' /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdressList