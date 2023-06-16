"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Password from "@/public/vector.svg";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedEposta, setIsFocusedEposta] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image className="mx-auto h-20 w-60" src={Logo} alt="İyziShip" />
        <div className="mt-8 w-[370px] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <div className="bg-white p-2 flex justify-center items-center gap-x-3 rounded-lg">
            <button className="px-8 py-2 w-full border border-solid border-[#007FFF] bg-[#007FFF] text-white font-[700] text-sm rounded-md">
              <Link href={"/login"}>Giriş Yap</Link>
            </button>
            <button className="px-8 py-2 w-full bg-[#FFF] text-[#007FFF] font-[700] text-sm rounded-md">
              <Link href={"/register"}>Kayıt Ol</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className=" space-y-6" action="#" method="POST">
          <div className="relative">
            <label
              htmlFor="email"
              className={`${isFocusedEposta ? "text-[#007FFF]" : "text-[#BDBDBD]"
                } bg-[#F3F6F9] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
            >
              E-Posta
            </label>
            <div className="mt-2">
              <input
                onFocus={() => {
                  setIsFocusedEposta(true);
                }}
                onBlur={() => {
                  setIsFocusedEposta(false);
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="batuhan.kirma@iyziship.com"
                className="input bg-[#F3F6F9] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <label
                htmlFor="password"
                className={`${isFocusedPass ? "text-[#007FFF]" : "text-[#BDBDBD]"
                  } bg-[#F3F6F9] px-1 absolute -top-2.5 left-2 block text-sm font-medium leading-6  mx-2`}
              >
                Şifre
              </label>
              <div className="mt-2 flex justify-end items-center">
                <input
                  onFocus={() => {
                    setIsFocusedPass(true);
                  }}
                  onBlur={() => {
                    setIsFocusedPass(false);
                  }}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="password"
                  placeholder="••••••••"
                  className="bg-[#F3F6F9] block w-full text-sm pl-5 text-[#BDBDBD] rounded-[10px] border-0 py-3 shadow-sm ring-1 ring-inset ring-[#BBBBBB] placeholder:text-[#BDBDBD] focus:ring-2 focus:ring-inset focus:ring-[#007FFF] sm:text-sm sm:leading-6"
                />
                <span onClick={toggleShowPassword} className="absolute mr-3">
                  <Image src={Password} alt="password" />
                </span>
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#007FFF] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#007FFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007FFF]"
            >
              <Link href={"/task"}>Giriş Yap</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
