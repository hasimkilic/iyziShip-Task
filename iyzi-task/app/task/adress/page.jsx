"use client";
import React, { useEffect, useState } from 'react';
import Check from "@/public/check.svg"
import Image from 'next/image';
const Adress = () => {
  const [isFocusedAdressTitle, setIsFocusedAdressTitle] = useState(false);
  const [isFocusedAdressLine, setIsFocusedAdressLine] = useState(false);
  const [isFocusedCountry, setIsFocusedCountry] = useState(false);
  const [isFocusedPosta, setIsFocusedPosta] = useState(false);
  const [isFocusedState, setIsFocusedState] = useState(false);
  const [isFocusedDisc, setIsFocusedDisc] = useState(false);
  const [isFocusedCity, setIsFocusedCity] = useState(false);

  function handleChange(event) {//burada posta kodunu sadece sayı olarak yazılmasına izin veriyoruz
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    event.target.value = numericValue;
  }

  return (
    <div className="bg-[#fff] w-full mx-auto rounded-xl px-8 py-12 h-fit flex justify-start">
      <div className='flex flex-wrap justify-start w-full gap-y-8 gap-x-10'>
        <div className='flex-grow basis-[50%]'>
          <div className='w-72'>
            <div className="relative" >
              <label
                htmlFor="adressTitle"
                className={`${isFocusedAdressTitle ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Adres Başlığı <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedAdressTitle(true);
                  }}
                  onBlur={() => {
                    setIsFocusedAdressTitle(false);
                  }}
                  id="adressTitle"
                  name="adressTitle"
                  type="text"
                  autoComplete="adressTitle"
                  placeholder='Adres Başlığı'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex-grow basis-[100%]'>
          <div className='w-full'>
            <div className="relative">
              <label
                htmlFor="adress"
                className={`${isFocusedAdressLine ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Adres Satırı 1 <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedAdressLine(true);
                  }}
                  onBlur={() => {
                    setIsFocusedAdressLine(false);
                  }}
                  id="adress"
                  name="adress"
                  type="text"
                  autoComplete="adress"
                  placeholder='Adresiniz'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex-grow basis-[300px]'>
          <div className='w-full'>
            <div className="relative">
              <label
                htmlFor="country"
                className={`${isFocusedCountry ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Ülke <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedCountry(true);
                  }}
                  onBlur={() => {
                    setIsFocusedCountry(false);
                  }}
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country"
                  placeholder='Turkey'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow basis-[300px]'>
          <div className='w-full'>
            <div className="relative">
              <label
                htmlFor="posta"
                className={`${isFocusedPosta ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Posta Kodu <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedPosta(true);
                  }}
                  onBlur={() => {
                    setIsFocusedPosta(false);
                  }}
                  id="posta"
                  name="posta"
                  type="text"
                  autoComplete="posta"
                  placeholder='Posta Kodunuz'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex-grow basis-[250px]'>
          <div className='w-full'>
            <div className="relative">
              <label
                htmlFor="state"
                className={`${isFocusedState ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Semt/Eyalet <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedState(true);
                  }}
                  onBlur={() => {
                    setIsFocusedState(false);
                  }}
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="state"
                  placeholder='Semt/Eyalet'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow basis-[250px]'>
          <div className='w-full'>
            <div className="relative">
              <label
                htmlFor="disc"
                className={`${isFocusedDisc ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                İlçe <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedDisc(true);
                  }}
                  onBlur={() => {
                    setIsFocusedDisc(false);
                  }}
                  id="disc"
                  name="disc"
                  type="text"
                  autoComplete="disc"
                  placeholder='İlçeniz'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow basis-[250px]'>
          <div className='w-full'>
            <div className="relative">
              <label
                htmlFor="city"
                className={`${isFocusedCity ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#fff] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Şehir <span className='text-red-600 text-sm'>*</span>
              </label>
              <div className="mt-2">
                <input
                  onFocus={() => {
                    setIsFocusedCity(true);
                  }}
                  onBlur={() => {
                    setIsFocusedCity(false);
                  }}
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  placeholder='Şehriniz'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow basis-[100%]'>
          <button type='submit'  className='ml-auto w-28 px-3 py-2 flex items-center justify-center bg-[#007FFF] text-white gap-x-1 rounded-xl  text-sm font-[700]'>
            <Image src={Check} alt="check-icon" />
            <span>Kaydet</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Adress