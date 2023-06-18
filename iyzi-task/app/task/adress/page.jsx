"use client";
import React, { useState } from 'react';
import Check from "@/public/check.svg"
import Image from 'next/image';

const API_URL = 'https://api.iyzihip.com';

const postAdressData = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer my-token',
      'task': "enable"
    },
    body: JSON.stringify(data,{adress:"Ev"})
  }
  await fetch(`${API_URL}/task/adress/`, requestOptions)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch((err) => { console.log(err) })
}

const Adress = () => {
  const [isFocusedAdressTitle, setIsFocusedAdressTitle] = useState(false);
  const [isFocusedAdressLine, setIsFocusedAdressLine] = useState(false);
  const [isFocusedCountry, setIsFocusedCountry] = useState(false);
  const [isFocusedPosta, setIsFocusedPosta] = useState(false);
  const [isFocusedState, setIsFocusedState] = useState(false);
  const [isFocusedDisc, setIsFocusedDisc] = useState(false);
  const [isFocusedCity, setIsFocusedCity] = useState(false);

  const [adressTitle, setAdressTitle] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [posta, setPosta] = useState('');
  const [state, setState] = useState('');
  const [disc, setDisc] = useState('');
  const [city, setCity] = useState('');
  const data = {
    adressTitle,
    address,
    country,
    posta,
    state,
    disc,
    city
  }
  const handleSubmit = () => {
    postAdressData(data);//buradan veriyi gönderiyoruz
    console.log(data);
    setAddress(" ");
    setAdressTitle("");
    setCountry("");
    setPosta("");
    setCity("");
    setDisc("");
    setState("");
  }
  // await postAdressData(data);

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('https://api.iyzihip.com/task/adress/add', {
  //       method: 'POST',
  //       headers: {
  //         'task': 'enable',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(addresses),
  //     });
  //     if (response.ok) {
  //       // İstek başarılı ise burada isteğin sonucunu işleyebilirsiniz
  //       alert('Form gönderildi');
  //       // Formu sıfırlamak için formData state'ini boş bir nesneyle güncelleyin
  //       setFormData({
  //         adressTitle: '',
  //         address: '',
  //         country: '',
  //         posta: '',
  //         state: '',
  //         disc: '',
  //         city: '',
  //       });
  //     } else {
  //       alert.error('Form gönderme hatası:', response.status);
  //     }
  //   } catch (error) {
  //     alert('Error submitting form:', error);
  //   }
  // };

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
                  onChange={(e) => setAdressTitle(e.target.value)}
                  id="adressTitle"
                  name="adressTitle"
                  type="text"
                  value={adressTitle}
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
                  onChange={(e) => setAddress(e.target.value)}
                  id="adress"
                  name="adress"
                  type="text"
                  value={address}
                  placeholder='Adresiniz'
                  autoComplete="adress"
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
                  onChange={(e) => setCountry(e.target.value)}
                  id="country"
                  name="country"
                  type="text"
                  value={country}
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
                  onChange={(e) => { setPosta(e.target.value); handleChange(e); }}
                  id="posta"
                  name="posta"
                  type="text"
                  value={posta}
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
                  onChange={(e) => setState(e.target.value)}
                  id="state"
                  name="state"
                  type="text"
                  value={state}
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
                  onChange={(e) => setDisc(e.target.value)}
                  id="disc"
                  name="disc"
                  type="text"
                  value={disc}
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
                  onChange={(e) => setCity(e.target.value)}
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  value={city}
                  placeholder='Şehriniz'
                  required
                  className="input bg-[#fff] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex-grow basis-[100%]'>
          <button type='submit' onClick={handleSubmit} className='ml-auto w-28 px-3 py-2 flex items-center justify-center bg-[#007FFF] text-white gap-x-1 rounded-xl  text-sm font-[700]'>
            <Image src={Check} alt="check-icon" />
            <span>Kaydet</span>
          </button>
        </div>
      </div>
    </div >
  )
}

export default Adress